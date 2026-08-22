import { useState } from "react";
import { Link } from "react-router-dom";
import { LegalModal } from "./LegalModal";
import { reachGoal, RUSTORE_URL } from "@/lib/analytics";
import logoImage from "@/assets/medical-mind-logo.png";
import logoWebp from "@/assets/medical-mind-logo.webp";

export const Footer = () => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  return (
    <>
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />

      <footer className="border-t border-border bg-background py-4 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-2 text-center sm:space-y-4">
            {/* Строка 1 — бренд */}
            <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <picture>
                <source type="image/webp" srcSet={logoWebp} />
                <img src={logoImage} alt="" width={28} height={28} className="h-7 w-7" />
              </picture>
              <span className="font-bold text-foreground">Medical Mind</span>
              <span aria-hidden="true">·</span>
              <span>ООО «ФармиКо» © 2026</span>
            </p>

            {/* Строка 2 — ссылки */}
            <nav
              className="flex flex-wrap items-center justify-center gap-x-4 text-sm"
              aria-label="Ссылки футера"
            >
              <a
                href={RUSTORE_URL}
                target="_blank"
                rel="noopener"
                onClick={() => reachGoal("click_rustore", { place: "footer" })}
                className="tap text-primary hover:underline"
              >
                Скачать в RuStore
              </a>
              <a
                href="/invest"
                onClick={() => reachGoal("click_invest", { place: "footer" })}
                className="tap text-primary hover:underline"
              >
                Инвесторам
              </a>
              <Link to="/privacy-policy" className="tap text-primary hover:underline">
                Политика конфиденциальности
              </Link>
              <button
                onClick={() => setIsLegalModalOpen(true)}
                className="tap text-primary hover:underline"
              >
                Реквизиты
              </button>
              <a href="mailto:farmico@list.ru" className="tap text-primary hover:underline">
                farmico@list.ru
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};
