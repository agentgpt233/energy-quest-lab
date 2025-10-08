import { Button } from "@/components/ui/button";
import { Gift, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";
import { useState } from "react";
import { DownloadModal } from "./DownloadModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/30 to-primary/5">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {["Ca", "Mg", "Zn", "Fe", "K", "Na"].map((element, i) => (
          <div
            key={element}
            className="absolute text-primary/20 font-bold text-2xl animate-float"
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                Научно-игровое приложение
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Закрой дефицит нутриентов{" "}
              <span className="text-primary">верни энергию дня</span> ⚡
            </h1>

            <div className="space-y-3 text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p>📸 Сфотографируй еду - приложение рассчитает и даст квест дня</p>
              <p>📋 Каждый квест строится по нормам СанПин РФ с поправкой на твои данные</p>
              <p>🎮 Игра выстраивает полезную привычку, а результат приходит сам</p>
            </div>

            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in group"
            >
              <Gift className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Начать бесплатно и открыть бонус-сундук энергии
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                  />
                ))}
              </div>
              <span>Более 3,000 человек открыли свой сундук сегодня 🔥</span>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 animate-float">
              {/* iPhone frame */}
              <div className="relative w-full max-w-[300px] mx-auto">
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
