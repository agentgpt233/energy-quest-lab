import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { DownloadModal } from "./DownloadModal";
import { reachGoal } from "@/lib/analytics";

/**
 * Плавающая кнопка.
 * Скролл-обработчик троттлится через rAF, состояние меняется только когда
 * действительно переключается видимость — без ре-рендера на каждый пиксель.
 */
export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const fromBottom = doc.scrollHeight - (window.scrollY + window.innerHeight);
      // у самого низа прячем — иначе кнопка перекрывает ссылки футера
      const next = window.scrollY > window.innerHeight * 0.3 && fromBottom > 220;
      if (next !== visibleRef.current) {
        visibleRef.current = next;
        setIsVisible(next);
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

  const openModal = () => {
    reachGoal("open_modal", { place: "sticky_cta" });
    setIsModalOpen(true);
  };

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <Button
          size="lg"
          onClick={openModal}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse group"
        >
          <span className="flex items-center gap-2">
            <Gift className="w-4 h-4" />
            <span className="hidden sm:inline">Скачать бесплатно</span>
            <span className="sm:hidden">Скачать</span>
          </span>
        </Button>
      </div>
    </>
  );
};
