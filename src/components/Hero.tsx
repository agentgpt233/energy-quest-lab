import { Button } from "@/components/ui/button";
import { Gift, Zap, TrendingDown, HeartCrack, BrainCog } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";
import { useState } from "react";
import { DownloadModal } from "./DownloadModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/30 to-primary/5 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {["Ca", "Mg", "Zn", "Fe", "K", "Na"].map((element, i) => (
          <div
            key={element}
            className="absolute text-primary/20 font-bold text-2xl animate-float hidden sm:block"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {element}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in w-full max-w-full overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                Научно-игровое приложение
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground break-words">
              Верни энергию и бодрость за 7 дней —{" "}
              <span className="text-primary">без диет и БАДов</span> ⚡
            </h1>

            <div className="space-y-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-full">
              <div className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="break-words">Высокий уровень утомляемости, нет жизнерадостности</p>
              </div>
              <div className="flex items-start gap-3">
                <HeartCrack className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="break-words">Повышенное чувство тревоги и напряжения</p>
              </div>
              <div className="flex items-start gap-3">
                <BrainCog className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="break-words">Проблемы с концентрацией и мотивацией</p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base lg:text-lg px-4 sm:px-8 py-4 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in group w-full sm:w-auto max-w-full whitespace-normal leading-snug"
            >
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform flex-shrink-0" />
              <span className="break-words">Начать бесплатно и восстановить энергию дня</span>
            </Button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                  />
                ))}
              </div>
              <span className="break-words">Более 3,000 человек восстановили энергию сегодня 🔥</span>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in w-full max-w-full overflow-hidden" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 animate-float w-full max-w-full">
              {/* iPhone frame */}
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] mx-auto">
                {/* iPhone shadow and frame */}
                <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
                  {/* Screen */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
                    <img
                      src={heroPhone}
                      alt="Medical Mind App Interface"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
