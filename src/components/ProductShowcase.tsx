import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Экраны лежат в public/screens — Vite копирует папку в dist как есть. */
const SCREENS = [
  { n: "01", caption: "Фото — и ИИ определяет блюдо",        alt: "Экран камеры: подсказки по съёмке блюда" },
  { n: "02", caption: "30+ нутриентов по каждому блюду",     alt: "Карточка борща: калории, белки, жиры и витамины" },
  { n: "03", caption: "Видим дефициты пользователя",         alt: "Суточная норма: 35% элементов без дефицита" },
  { n: "04", caption: "Персональный анализ дефицитов",       alt: "Коррекция дефицитов: анализ 23 элементов и подбор блюд" },
  { n: "05", caption: "Запатентованная методика коррекции",  alt: "Схема приёма на месяц с научной основой НИИ гигиены" },
  { n: "06", caption: "Учёт питания по дням",                alt: "Дневник питания за день с приёмами пищи и КБЖУ" },
  { n: "07", caption: "Всё питание в одном экране",          alt: "Главный экран: нормы, прогресс и сундуки наград" },
  { n: "08", caption: "Геймификация удерживает",             alt: "Квест закрыт: начислены опыт и витакоины" },
  { n: "09", caption: "Награды за регулярность",             alt: "Экран полученной награды из сундука" },
  { n: "10", caption: "Монетизация: подписка + витакоины",   alt: "Магазин: подписка Premium 999 ₽/мес и пакеты витакоинов" },
];

const AUTOPLAY_MS = 4000;

export const ProductShowcase = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const slideWidth = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    return first.getBoundingClientRect().width + gap;
  };

  const goTo = useCallback((i: number, smooth = true) => {
    const el = trackRef.current;
    if (!el) return;
    const idx = (i + SCREENS.length) % SCREENS.length;
    el.scrollTo({ left: slideWidth() * idx, behavior: smooth ? "smooth" : ("instant" as ScrollBehavior) });
  }, []);

  /* активный слайд по позиции прокрутки */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const w = slideWidth();
      if (!w) return;
      const i = Math.round(el.scrollLeft / w);
      setActive((prev) => (prev === i ? prev : Math.min(Math.max(i, 0), SCREENS.length - 1)));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  /* автопрокрутка: стоит при наведении, касании и при prefers-reduced-motion */
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const w = slideWidth();
      const i = w ? Math.round(el.scrollLeft / w) : 0;
      goTo(i + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [paused, goTo]);

  const hold = () => setPaused(true);
  const release = () => setPaused(false);

  return (
    <section className="section-y bg-background">
      <div className="container mx-auto px-4">
        <div className="section-head text-center mx-auto max-w-3xl">
          <h2 className="text-foreground">Продукт уже работает</h2>
          <p className="text-muted-foreground">
            Реальные экраны приложения из RuStore, версия 1.6.4
          </p>
        </div>

        <div
          className="showcase"
          onMouseEnter={hold}
          onMouseLeave={release}
          onFocusCapture={hold}
          onBlurCapture={release}
          onTouchStart={hold}
          onTouchEnd={release}
        >
          <button
            type="button"
            className="carousel-arrow carousel-arrow--prev"
            onClick={() => goTo(active - 1)}
            aria-label="Предыдущий экран"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="showcase__track" ref={trackRef}>
            {SCREENS.map((s, i) => (
              <figure className="showcase__slide" key={s.n}>
                <div className="phone-frame">
                  <img
                    src={`/screens/${s.n}.webp`}
                    alt={s.alt}
                    width={640}
                    height={1422}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <figcaption className="showcase__caption">{s.caption}</figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow--next"
            onClick={() => goTo(active + 1)}
            aria-label="Следующий экран"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Экраны приложения">
          {SCREENS.map((s, i) => (
            <button
              key={s.n}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={s.caption}
              className={`carousel-dot ${i === active ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
