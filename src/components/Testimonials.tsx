import { useCallback, useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "За неделю узнала, что у меня дефицит витамина D и магния. Начала корректировать питание по рекомендациям — усталость ушла, сплю намного лучше! Энергия выросла с 3/10 до 8/10.",
    author: "Мария, 27",
    role: "менеджер по продажам",
    rating: 5,
  },
  {
    text: "Фото вместо подсчёта калорий — это гениально! Раньше бросал через неделю, а тут увлёкся квестами и витакоинами. Уже месяц следую рекомендациям, самочувствие отличное.",
    author: "Иван, 32",
    role: "разработчик",
    rating: 5,
  },
  {
    text: "Отчёт показал дефицит железа и B12 — объяснил мою постоянную вялость. Врач подтвердил анализы. Теперь корректирую рацион осознанно. Результат за 2 недели заметен!",
    author: "Анна, 29",
    role: "дизайнер",
    rating: 5,
  },
];

const N = testimonials.length;
/* Клоны по краям: [последний, ...настоящие, первый] — свайп идёт по кругу. */
const slides = [testimonials[N - 1], ...testimonials, testimonials[0]];

const Card = ({ t }: { t: (typeof testimonials)[number] }) => (
  <div className="p-4 sm:p-8 rounded-2xl bg-card border border-border h-full">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
        {t.author.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="flex gap-1 mb-1">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-[13.5px] sm:text-base text-foreground mb-3 leading-relaxed">"{t.text}"</p>
    <div className="border-t border-border pt-3">
      <p className="text-sm font-semibold text-foreground">{t.author}</p>
      <p className="text-xs text-muted-foreground">{t.role}</p>
    </div>
  </div>
);

export const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);          // индекс настоящего слайда
  const [loopable, setLoopable] = useState(false);  // карусель активна только когда ряд реально скроллится

  const slideWidth = () => {
    const el = trackRef.current;
    return el ? el.scrollWidth / slides.length : 0;
  };

  /* Встать на первый настоящий слайд */
  const init = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const scrollable = el.scrollWidth > el.clientWidth + 4;
    setLoopable(scrollable);
    if (scrollable) el.scrollTo({ left: slideWidth(), behavior: "instant" as ScrollBehavior });
  }, []);

  useEffect(() => {
    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, [init]);

  /* Доехали до клона — мгновенно перескакиваем на настоящий слайд */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let timer: number | undefined;
    const settle = () => {
      const w = slideWidth();
      if (!w) return;
      const i = Math.round(el.scrollLeft / w);
      if (i === 0) {
        el.scrollTo({ left: w * N, behavior: "instant" as ScrollBehavior });
        setActive(N - 1);
      } else if (i === slides.length - 1) {
        el.scrollTo({ left: w, behavior: "instant" as ScrollBehavior });
        setActive(0);
      } else {
        setActive(i - 1);
      }
    };

    const onScrollEnd = () => settle();
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(settle, 120);
    };

    if ("onscrollend" in window) el.addEventListener("scrollend", onScrollEnd);
    else el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      el.removeEventListener("scrollend", onScrollEnd);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  const step = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: slideWidth() * dir, behavior: "smooth" });
  };

  const goTo = (realIndex: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: slideWidth() * (realIndex + 1), behavior: "smooth" });
  };

  return (
    <section className="section-y bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="section-head text-center">
          <h2 className="text-foreground">Что говорят пользователи</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {loopable && (
            <button
              type="button"
              className="carousel-arrow carousel-arrow--prev !flex"
              onClick={() => step(-1)}
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
          )}

          <div className="swipe-row" ref={trackRef}>
            {slides.map((t, i) => (
              <div key={i} aria-hidden={i === 0 || i === slides.length - 1 ? true : undefined}>
                <Card t={t} />
              </div>
            ))}
          </div>

          {loopable && (
            <button
              type="button"
              className="carousel-arrow carousel-arrow--next !flex"
              onClick={() => step(1)}
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          )}
        </div>

        {loopable && (
          <div className="carousel-dots" role="tablist" aria-label="Отзывы">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Отзыв ${i + 1}: ${t.author}`}
                className={`carousel-dot ${i === active ? "is-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
