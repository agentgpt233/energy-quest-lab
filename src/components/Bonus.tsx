import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export const Bonus = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[1, 2, 3, 4, 5].map((i) => (
          <Sparkles
            key={i}
            className="absolute text-accent animate-float"
            style={{
              left: `${i * 20}%`,
              top: `${i * 15}%`,
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

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            🎉 Получи бонус-сундук и свой первый отчёт бесплатно
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Первый недельный анализ — без карты и подписки.
            <br />
            <span className="text-primary font-semibold">
              Безопасно. Научно. Интерактивно.
            </span>
          </p>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse group"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Получить бонус-сундук энергии
          </Button>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                />
              ))}
            </div>
            <span className="font-medium">
              Уже более 3,000 человек открыли свой сундук сегодня 🔥
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
