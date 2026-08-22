import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

export const SCREENS = [
  { base: "glavnaya", caption: "Главная",        alt: "Главный экран Medical Mind: анализ по фото, суточная норма и сундуки наград" },
  { base: "borsch",   caption: "Разбор блюда",   alt: "Разбор борща: калории, белки, жиры, углеводы и витамины" },
  { base: "dnevnik",  caption: "Дневник",        alt: "Дневник питания за день с приёмами пищи и КБЖУ" },
  { base: "normy",    caption: "Суточная норма", alt: "Суточная норма: 35% элементов без дефицита из 23 витаминов и минералов" },
  { base: "podbor",   caption: "Подбор блюд",    alt: "Коррекция дефицитов и подбор блюд под нехватку нутриентов" },
  { base: "nagrada",  caption: "Награды",        alt: "Экран награды: квест закрыт, начислены опыт и витакоины" },
];

/** Свайп-карусель реальных экранов приложения. Автопрокрутки нет — только руками. */
export const ScreenCarousel = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const slide = el.scrollWidth / SCREENS.length;
      const idx = Math.round(el.scrollLeft / slide);
      setActive((prev) => (prev === idx ? prev : Math.min(Math.max(idx, 0), SCREENS.length - 1)));
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.scrollWidth / SCREENS.length;
    el.scrollTo({ left: slide * i, behavior: "smooth" });
  };

  return (
    <div className="screen-carousel">
      <button
        type="button"
        className="carousel-arrow carousel-arrow--prev"
        onClick={() => goTo(Math.max(active - 1, 0))}
        disabled={active === 0}
        aria-label="Предыдущий экран"
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
      </button>

      <div className="carousel-track" ref={trackRef}>
        {SCREENS.map((s, i) => (
          <div className="carousel-slide" key={s.base}>
            <PhoneFrame base={s.base} alt={s.alt} eager={i === 0} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel-arrow carousel-arrow--next"
        onClick={() => goTo(Math.min(active + 1, SCREENS.length - 1))}
        disabled={active === SCREENS.length - 1}
        aria-label="Следующий экран"
      >
        <ChevronRight className="w-5 h-5" aria-hidden="true" />
      </button>

      <div className="carousel-dots" role="tablist" aria-label="Экраны приложения">
        {SCREENS.map((s, i) => (
          <button
            key={s.base}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={s.caption}
            className={`carousel-dot ${i === active ? "is-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <p className="carousel-caption" aria-live="polite">{SCREENS[active].caption}</p>
    </div>
  );
};
