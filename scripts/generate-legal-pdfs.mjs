// Пересборка PDF юр-документов из тех же React-компонентов, что рисуют страницы.
//
// Раньше PDF в public/documents делались отдельно (ReportLab, вне репозитория),
// поэтому текст на сайте и текст в PDF разъезжались — а именно PDF открывает
// ревьюер Google Play. Здесь единственный источник правды — src/components/documents/*,
// компоненты рендерятся в HTML, стилизуются собранным Tailwind-CSS и печатаются
// в PDF headless-браузером.
//
// Запуск:  npm run docs:pdf     (нужен собранный dist/ — сначала npm run build)

import { build } from "esbuild";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const DOCS = [
  { component: "PrivacyPolicyContent", out: "privacy-policy.pdf", title: "Политика конфиденциальности — Medical Mind" },
  { component: "TermsOfServiceContent", out: "terms-of-service.pdf", title: "Пользовательское соглашение — Medical Mind" },
  { component: "PersonalDataConsentContent", out: "personal-data-consent.pdf", title: "Согласие на обработку персональных данных — Medical Mind" },
];

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) throw new Error("Не найден Chrome/Edge. Укажите путь через CHROME_PATH.");

// Собранный Tailwind-CSS — чтобы PDF выглядел как страница на сайте.
const assetsDir = join(root, "dist", "assets");
if (!existsSync(assetsDir)) throw new Error("Нет dist/assets — сначала выполните npm run build");
const cssFile = readdirSync(assetsDir).find((f) => f.endsWith(".css"));
const css = readFileSync(join(assetsDir, cssFile), "utf8");

// Рабочая папка должна лежать внутри проекта: бандл импортит react/react-dom
// как external, и Node резолвит их относительно самого файла.
mkdirSync(join(root, "node_modules", ".cache"), { recursive: true });
const work = mkdtempSync(join(root, "node_modules", ".cache", "legal-pdf-"));

try {
  // 1. Бандлим компоненты + рендерер в один ESM-файл, который умеет исполнить Node.
  const entry = join(work, "entry.jsx");
  writeFileSync(
    entry,
    `import { renderToStaticMarkup } from "react-dom/server";
${DOCS.map((d) => `import { ${d.component} } from "@/components/documents/${d.component}";`).join("\n")}
export const rendered = {
${DOCS.map((d) => `  ${d.component}: renderToStaticMarkup(<${d.component} />),`).join("\n")}
};`
  );

  const bundle = join(work, "bundle.mjs");
  await build({
    entryPoints: [entry],
    bundle: true,
    format: "esm",
    platform: "node",
    outfile: bundle,
    jsx: "automatic",
    absWorkingDir: root,
    alias: { "@": join(root, "src") },
    external: ["react", "react-dom", "react/jsx-runtime"],
    logLevel: "warning",
  });

  const { rendered } = await import(pathToFileURL(bundle).href);

  // 2. Каждый документ -> HTML -> PDF через headless-печать.
  for (const doc of DOCS) {
    const html = `<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><title>${doc.title}</title>
<style>${css}</style>
<style>
  @page { size: A4; margin: 18mm 16mm; }
  body { background:#fff; color:#333; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; }
  .doc { max-width: none; }
  section { break-inside: auto; }
  h2, h3 { break-after: avoid; }
</style></head>
<body><div class="doc">${rendered[doc.component]}</div></body></html>`;

    const htmlFile = join(work, doc.out.replace(/\.pdf$/, ".html"));
    writeFileSync(htmlFile, html, "utf8");

    const pdfTmp = join(work, doc.out);
    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-first-run",
        "--disable-extensions",
        // Без изолированного профиля Chrome пытается говорить с уже запущенным
        // инстансом и просто виснет, ничего не напечатав.
        `--user-data-dir=${join(work, "chrome-profile")}`,
        "--no-pdf-header-footer",
        `--print-to-pdf=${pdfTmp}`,
        pathToFileURL(htmlFile).href,
      ],
      { stdio: "ignore", timeout: 120_000 }
    );

    if (!existsSync(pdfTmp)) throw new Error(`Chrome не создал ${doc.out}`);
    const dest = join(root, "public", "documents", doc.out);
    copyFileSync(pdfTmp, dest);
    console.log(`docs:pdf: ${doc.out} (${(readFileSync(dest).length / 1024).toFixed(0)} КБ)`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
