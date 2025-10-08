import { Camera, FileText, Gift } from "lucide-react";
import appScreenshot from "@/assets/app-screenshot.png";

const steps = [
  {
    icon: Camera,
    number: "1",
    title: "Сфотографируй еду",
    description: "Просто сделай фото блюда.",
  },
  {
    icon: FileText,
    number: "2",
    title: "Разберём блюдо и занесём нутриенты в дневник",
    description: "Баланс и квест обновятся.",
  },
  {
    icon: Gift,
    number: "3",
    title: "Закрывай дефициты — открывай сундуки",
    description: "Получай награды.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Как это работает
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Steps on the left */}
          <div className="flex flex-col gap-8 flex-1 order-2 lg:order-1">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-foreground font-bold flex items-center justify-center text-xs shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Phone mockup on the right */}
          <div className="flex-shrink-0 animate-fade-in order-1 lg:order-2">
            <div className="relative w-[280px] h-[570px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] shadow-2xl p-3">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={appScreenshot} 
                    alt="Medical Mind App Screenshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
            </div>
          </div>
        </div>

        <p className="text-center text-lg text-muted-foreground mt-12 animate-fade-in">
          Всё просто. Один шаг — и твой уровень энергии растёт.
        </p>
      </div>
    </section>
  );
};
