import { Button } from "@/components/ui/button";
import { Gift, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

export const Hero = () => {
  return (
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

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Закрой дефициты нутриентов — почувствуй{" "}
              <span className="text-primary">энергию дня</span> ⚡
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Приложение, созданное на основе научных исследований и норм СанПиН РФ.
              Сфотографируй еду — получи персональный отчёт по нутриентам и квесты
              для восстановления баланса.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in group"
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
              <img
                src={heroPhone}
                alt="Medical Mind App Interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
