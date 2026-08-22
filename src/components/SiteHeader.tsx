import { useEffect, useRef, useState } from "react";
import logoImage from "@/assets/medical-mind-logo.png";
import logoWebp from "@/assets/medical-mind-logo.webp";
import { reachGoal, RUSTORE_URL } from "@/lib/analytics";

/**
 * Лёгкая шапка: прозрачная над hero, с блюром после прокрутки.
 * Тот же приём, что на /invest — сайт и инвест-страница ощущаются одной командой.
 */
export const SiteHeader = () => {
  const [stuck, setStuck] = useState(false);
  const stuckRef = useRef(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const next = window.scrollY > window.innerHeight * 0.5;
      if (next !== stuckRef.current) {
        stuckRef.current = next;
        setStuck(next);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-1 z-40 transition-colors duration-300 ${
        stuck ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <a
          href="/"
          aria-label="Medical Mind — на главную"
          className="flex flex-shrink-0 items-center gap-2 min-h-[44px] min-w-[44px] pr-2 text-[#0b1b2b] font-bold tracking-tight"
        >
          <picture>
            <source type="image/webp" srcSet={logoWebp} />
            <img src={logoImage} alt="" width={32} height={32} className="h-8 w-8" />
          </picture>
          <span className="hidden sm:inline">Medical Mind</span>
        </a>

        <nav className="ml-auto flex items-center gap-3 sm:gap-5" aria-label="Основная навигация">
          <a
            href="/invest"
            onClick={() => reachGoal("click_invest", { place: "header" })}
            className="tap text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-1"
          >
            Инвесторам
          </a>
          <a
            href={RUSTORE_URL}
            target="_blank"
            rel="noopener"
            onClick={() => reachGoal("click_rustore", { place: "header" })}
            className="tap rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            <span className="hidden sm:inline">Скачать бесплатно</span>
            <span className="sm:hidden">Скачать</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
