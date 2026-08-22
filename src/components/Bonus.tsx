import { Gift, Sparkles, Zap, Download } from "lucide-react";
import { useState } from "react";
import { reachGoal, RUSTORE_URL } from "@/lib/analytics";

export const Bonus = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="section-y bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden">
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
          <div className="mb-4 sm:mb-8 flex justify-center">
            <div
              className="relative cursor-pointer transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`w-20 h-20 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center transition-all duration-500 ${
                  isHovered ? "rotate-12 scale-110" : ""
                }`}
              >
                <Gift className="w-10 h-10 sm:w-16 sm:h-16 text-white" aria-hidden="true" />
              </div>
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-12 h-12 sm:w-20 sm:h-20 text-accent animate-scale-in" aria-hidden="true" />
                </div>
              )}
            </div>
          </div>

          <h2 className="text-[25px] sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-5 break-words px-4 leading-tight">
            Начните бесплатно — это полноценный режим
          </h2>

          <p className="text-[15px] sm:text-xl text-muted-foreground mb-5 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Анализ еды по фото, дефициты, дневник и награды доступны сразу и бесплатно.
            Активность приносит витакоины — ими открываются дополнительные возможности.
            <br />
            <span className="text-primary font-semibold">
              Для максимума без ожидания есть подписка Premium.
            </span>
          </p>

          <div className="max-w-2xl mx-auto mb-5 px-4">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-accent rounded-xl p-4 sm:p-6">
              <p className="text-[14px] sm:text-lg font-semibold text-orange-900 text-center leading-relaxed">
                ⚡ Каждый день промедления — это день с дефицитом энергии. 
                <br className="hidden sm:block" />
                Начни восстановление прямо сейчас ⚡
              </p>
            </div>
          </div>

          <a
            href={RUSTORE_URL}
            target="_blank"
            rel="noopener"
            onClick={() => reachGoal("click_rustore", { place: "bonus" })}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-medium text-accent-foreground shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto max-w-md mx-4"
          >
            <Download className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span className="break-words">Скачать в RuStore — бесплатно</span>
          </a>
        </div>
      </div>
    </section>
    </>
  );
};
