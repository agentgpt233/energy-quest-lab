import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Gift, Sparkles } from "lucide-react";
import { DownloadModal } from "./DownloadModal";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaText, setCtaText] = useState("Восстановить энергию дня");
  const [icon, setIcon] = useState<React.ReactNode>(<Gift className="w-4 h-4" />);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsVisible(scrollPosition > windowHeight * 0.3);

      if (scrollPosition > windowHeight * 3) {
        setCtaText("Восстановить энергию дня");
        setIcon(<Sparkles className="w-4 h-4" />);
      } else if (scrollPosition > windowHeight * 1.5) {
        setCtaText("Начать бесплатно");
        setIcon(<Zap className="w-4 h-4" />);
      } else {
        setCtaText("Восстановить энергию дня");
        setIcon(<Gift className="w-4 h-4" />);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <Button
          size="lg"
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse group"
        >
          <span className="flex items-center gap-2">
            {icon}
            <span className="hidden sm:inline">{ctaText}</span>
            <span className="sm:hidden">Начать</span>
          </span>
        </Button>
      </div>
    </>
  );
};
