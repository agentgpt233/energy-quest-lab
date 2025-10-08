import { Camera, FileText, Gift } from "lucide-react";
import appAnalysis from "@/assets/app-analysis.jpg";

const steps = [
  {
    icon: Camera,
    number: "1",
    title: "Сфотографируй еду",
    description: "Просто сделай фото блюда",
  },
  {
    icon: FileText,
    number: "2",
    title: "Раскрой скрытые дефициты",
    description: "Получи квест на день и рекомендации по питанию",
  },
  {
    icon: Gift,
    number: "3",
    title: "Закрывай дефициты — открывай сундуки",
    description: "Играй и получай награды",
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex items-center gap-4 w-full md:w-auto">
                <div
                  className="flex-shrink-0 w-full md:w-64 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-foreground font-bold flex items-center justify-center text-sm shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block flex-shrink-0 w-12 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Visual Demo Section */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 rounded-3xl p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Смотри, как это работает
              </h3>
              <p className="text-muted-foreground text-lg">
                Детальный анализ каждого блюда с разбивкой по нутриентам
              </p>
            </div>
            
            <div className="relative w-full max-w-[320px] mx-auto">
              {/* iPhone frame */}
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl animate-float">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
                {/* Screen */}
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
                  <img
                    src={appAnalysis}
                    alt="Детальный анализ блюда с нутриентами"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10" />
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
