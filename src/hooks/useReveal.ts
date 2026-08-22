import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Одноразовое появление секции при входе во вьюпорт.
 * Возвращает ref для элемента и признак «показан».
 * Анимация — только opacity/transform, без работы с layout.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>(threshold = 0.15) => {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (shown || !ref.current) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, threshold]);

  return { ref, shown };
};

/**
 * Счётчик 0 → value, запускается один раз при входе во вьюпорт.
 * Значение пишется прямо в DOM: за 1,3 с анимации это ~78 кадров,
 * и ре-рендерить React на каждом кадре в окне LCP не нужно.
 * При prefers-reduced-motion сразу показывает финальное значение.
 */
export const useCountUp = (value: number, decimals = 0, duration = 1300) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const format = (n: number) =>
    new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(n);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      el.textContent = format(value);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        let start: number | null = null;
        const tick = (ts: number) => {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = format(value * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else el.textContent = format(value);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals, duration]);

  /** Начальное значение до старта анимации */
  const initial = prefersReducedMotion() ? format(value) : format(0);

  return { ref, initial };
};
