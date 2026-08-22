import { useEffect, useRef } from "react";
import { reachGoal } from "@/lib/analytics";

/**
 * Индикатор прочитанного.
 * Раньше на каждое событие скролла шёл setState + чтение scrollHeight —
 * ре-рендер React и forced reflow на каждый пиксель прокрутки.
 * Теперь: rAF-троттлинг, запись напрямую в style, transform вместо width
 * (композитор, без layout). Здесь же отправляется цель scroll_75.
 */
export const ProgressBar = () => {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;
    let scroll75Sent = false;

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? Math.min(window.scrollY / total, 1) : 0;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${ratio})`;
      }

      if (!scroll75Sent && ratio >= 0.75) {
        scroll75Sent = true;
        reachGoal("scroll_75");
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
    <div className="fixed top-0 left-0 w-full h-1 bg-secondary z-50" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-primary via-accent to-primary"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};
