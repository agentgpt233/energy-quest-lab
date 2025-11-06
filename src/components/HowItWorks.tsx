import { Activity, ClipboardList, Calculator, Target } from "lucide-react";
import howItWorksPhone from "@/assets/how-it-works-phone.png";

const steps = [
  {
    icon: Activity,
    number: "1",
    title: "Мониторинг",
    description: "Сфотографируй еду — одно фото даёт полный анализ нутриентов за секунды",
  },
  {
    icon: ClipboardList,
    number: "2",
    title: "Учёт",
    description: "Все калории и нутриенты рассчитываются автоматически — без ручного ввода",
  },
  {
    icon: Calculator,
    number: "3",
    title: "Расчёт",
    description: "Видишь свои дефициты и избытки в понятном формате — что не хватает, а что в норме",
  },
  {
    icon: Target,
    number: "4",
    title: "Коррекция",
    description: "Получаешь персональные рекомендации по питанию для восполнения баланса",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-muted-foreground">
            Всё гениальное просто
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile: Text first, Image second */}
          <div className="lg:hidden space-y-8 animate-fade-in">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-foreground font-bold flex items-center justify-center text-xs shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image - Left on desktop */}
          <div className="relative animate-fade-in lg:order-1" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 animate-float w-full max-w-[320px] mx-auto">
              {/* Android phone frame */}
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="relative bg-white rounded-[2rem] overflow-hidden">
                  <img
                    src={howItWorksPhone}
                    alt="Как работает Medical Mind"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10" />
          </div>

          {/* Desktop: Text on right */}
          <div className="hidden lg:block space-y-8 animate-fade-in lg:order-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-foreground font-bold flex items-center justify-center text-xs shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
