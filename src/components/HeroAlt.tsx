import { Camera, FileText, Gamepad2, Zap } from "lucide-react";
import appScreenshot from "@/assets/app-screenshot.png";

const features = [
  {
    icon: Camera,
    text: "Сфотографируй еду — приложение рассчитает нутриенты и даст квест дня.",
  },
  {
    icon: FileText,
    text: "Каждый квест строится по нормам СанПиН РФ с учётом твоих данных.",
  },
  {
    icon: Gamepad2,
    text: "Игра выстраивает полезную привычку, а результат заметен уже через 7 дней.",
  },
];

export const HeroAlt = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="flex-1 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Научно-игровое приложение
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Закрой дефициты нутриентов — верни энергию дня{" "}
              <span className="inline-block">⚡</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Для тех, кто хочет вернуть энергию без подсчёта калорий и жёстких диет.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground pt-2 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-[280px] h-[570px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] shadow-2xl p-3">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <img
                    src={appScreenshot}
                    alt="Energy Quest App Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
