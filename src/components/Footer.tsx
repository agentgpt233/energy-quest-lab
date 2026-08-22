import { Zap, Lock, Download } from "lucide-react";
import { useState } from "react";
import { LegalModal } from "./LegalModal";
import { reachGoal, RUSTORE_URL } from "@/lib/analytics";

export const Footer = () => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  return (
    <>
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
      <footer className="section-y bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-[25px] sm:text-4xl font-bold text-foreground flex items-center justify-center gap-2">
              <Zap className="w-8 h-8 text-primary" />
              Medical Mind
            </h2>
            <p className="text-[15px] sm:text-xl text-muted-foreground font-medium">
              Наука. Энергия. Игра.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <a
              href={RUSTORE_URL}
              target="_blank"
              rel="noopener"
              onClick={() => reachGoal("click_rustore", { place: "footer" })}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-10 py-6 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              Скачать в RuStore — бесплатно
            </a>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Безопасно и конфиденциально</span>
            </div>
          </div>

          <div
            className="pt-8 border-t border-border text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p>© 2025 ООО «ФармиКо». Все права защищены.</p>
            <p className="mt-2">
              Научно-игровое приложение для восстановления энергии через нутриенты
            </p>
            <nav
              className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base"
              aria-label="Дополнительные разделы"
            >
              <a
                href="/invest"
                onClick={() => reachGoal("click_invest", { place: "footer" })}
                className="tap font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                Инвесторам
              </a>
              <button
                onClick={() => setIsLegalModalOpen(true)}
                className="tap font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                Юридическая информация и реквизиты
              </button>
            </nav>

            <div className="mt-6 space-y-1 text-sm text-muted-foreground">
              <p>
                Партнёрам (производители БАД, доставка еды, PR):{" "}
                <a className="tap text-primary hover:underline" href="mailto:farmico@list.ru">
                  farmico@list.ru
                </a>
              </p>
              <p>
                Контакты:{" "}
                <a className="tap text-primary hover:underline" href="mailto:farmico@list.ru">
                  farmico@list.ru
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
