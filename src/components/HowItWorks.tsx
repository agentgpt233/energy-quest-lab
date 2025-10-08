import { Camera, FileText, Gift } from "lucide-react";

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

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-5xl mx-auto">
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

        <p className="text-center text-lg text-muted-foreground mt-12 animate-fade-in">
          Всё просто. Один шаг — и твой уровень энергии растёт.
        </p>
      </div>
    </section>
  );
};
