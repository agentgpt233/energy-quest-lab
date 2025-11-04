import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import { DownloadModal } from "./DownloadModal";

export const Bonus = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="py-12 sm:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <Sparkles
            key={i}
            className="absolute text-accent animate-float hidden lg:block"
            size={32}
            style={{
              left: `${i * 25 + 10}%`,
              top: `${i * 20 + 10}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div
              className="relative cursor-pointer transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`w-32 h-32 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center transition-all duration-500 ${
                  isHovered ? "rotate-12 scale-110" : ""
                }`}
              >
                <Gift className="w-16 h-16 text-white" />
              </div>
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-20 h-20 text-accent animate-scale-in" />
                </div>
              )}
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 break-words px-4">
            Восстанови энергию дня и начни бесплатно ⚡
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Все функции доступны бесплатно — просто будь активен.
            <br />
            <span className="text-primary font-semibold">
              Без подписок. Без ограничений. Только энергия ⚡
            </span>
          </p>

          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse group w-full sm:w-auto max-w-md mx-4"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform flex-shrink-0" />
            <span className="break-words">Восстановить энергию дня</span>
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};
