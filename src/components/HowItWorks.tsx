import { Activity, ClipboardList, Calculator, Target } from "lucide-react";
import howItWorksPhone from "@/assets/how-it-works-phone.png";
import howItWorksPhoneWebp from "@/assets/how-it-works-phone.webp";

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
    <section className="section-y bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="section-head text-center">
          <h2 className="text-foreground">Как это работает</h2>
          <p className="text-muted-foreground">Всё гениальное просто</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Мобильный: вертикальный степпер, скриншот телефона один раз ниже */}
          <ol className="stepper lg:hidden">
            {steps.map((step) => (
              <li key={step.number} className="stepper__item">
                <span className="stepper__num" aria-hidden="true">{step.number}</span>
                <h3 className="stepper__title text-foreground">{step.title}</h3>
                <p className="stepper__text text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>

          {/* Image - Left on desktop */}
          <div className="relative animate-fade-in lg:order-1" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 animate-float w-full max-w-[210px] sm:max-w-[320px] mx-auto">
              {/* Android phone frame */}
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="relative bg-white rounded-[2rem] overflow-hidden">
                    <picture>
                      <source type="image/webp" srcSet={howItWorksPhoneWebp} />
                      <img
                        src={howItWorksPhone}
                        alt="Экран разбора блюда в Medical Mind: КБЖУ, витамины и минералы"
                        width={590}
                        height={1280}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto"
                      />
                    </picture>
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
                  className="flex items-start gap-4 hover-lift rounded-xl p-2 hover:shadow-lg"
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
