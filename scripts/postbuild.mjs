// Postbuild для GitHub Pages.
//
// Pages отдаёт только физические файлы, поэтому у SPA на BrowserRouter прямой
// заход на /privacy-policy возвращает голый GitHub 404. Здесь мы:
//   1) кладём index.html копией по пути <route>/index.html — Pages отвечает 200
//      без всякого JS-редиректа (это то, что видят ревьюеры Google Play/RuStore);
//   2) кладём 404.html копией index.html — fallback для всех прочих путей,
//      SPA грузится и роутер сам рисует NotFound;
//   3) копируем CNAME в dist, чтобы кастомный домен не зависел от того,
//      сохранит ли его action при деплое.

import { copyFileSync, existsSync, mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

// Пути должны совпадать с <Route path> в src/App.tsx.
const ROUTES = [
  "privacy-policy",
  "terms-of-service",
  "personal-data-consent",
  "delete-account",
  "auth/google/callback",
  // короткие алиасы для юр-страниц — их часто вписывают в формы магазинов
  "terms",
  "privacy",
];

const indexPath = join(dist, "index.html");
if (!existsSync(indexPath)) {
  throw new Error(`postbuild: ${indexPath} не найден — сборка не отработала?`);
}
const html = readFileSync(indexPath, "utf8");

// 1) статические 200-страницы под каждый маршрут
for (const route of ROUTES) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`postbuild: /${route}/index.html`);
}

// 2) SPA-fallback для всего остального
writeFileSync(join(dist, "404.html"), html);
console.log("postbuild: 404.html");

// 3) кастомный домен
const cname = join(root, "CNAME");
if (existsSync(cname)) {
  copyFileSync(cname, join(dist, "CNAME"));
  console.log(`postbuild: CNAME -> ${readFileSync(cname, "utf8").trim()}`);
} else {
  console.warn("postbuild: CNAME в корне репозитория не найден");
}
