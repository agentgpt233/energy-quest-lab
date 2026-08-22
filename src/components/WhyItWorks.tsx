import { Heart, Target, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Самочувствие и настроение улучшается",
    description: "Полноценный баланс витаминов группы B, магния и железа возвращает бодрость и позитивный настрой",
  },
  {
    icon: Target,
    title: "Рост концентрации внимания",
    description: "Омега-3, йод и витамины группы B обеспечивают чёткость мышления и продуктивность на весь день",
  },
  {
    icon: Lightbulb,
    title: "Улучшаются когнитивные функции",
    description: "Полноценное питание мозга нутриентами усиливает память, скорость обработки информации и принятие решений",
  },
  {
    icon: Rocket,
    title: "Горы ниже, цели ближе",
    description: "Стабильная энергия и выносливость помогают преодолевать сложные задачи и достигать амбициозных целей",
  },
];

export const WhyItWorks = () => {
  return (
    <section className="section-y bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="section-head text-center max-w-3xl mx-auto">
          <h2 className="text-foreground">
            Баланс без дефицита — простой способ стать крепче и энергичнее
          </h2>
          <p className="text-muted-foreground">
            Когда организм получает все необходимые нутриенты, вы чувствуете реальные изменения
            уже через несколько дней
          </p>
        </div>

        <div className="card-grid cols-2 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="compact-card bg-card border border-border hover-lift hover:border-primary/50 hover:shadow-lg"
              >
                <div className="compact-card__head">
                  <span className="compact-card__icon bg-primary/10">
                    <Icon className="w-[18px] h-[18px] text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="compact-card__title text-foreground">{feature.title}</h3>
                </div>
                <p className="compact-card__text text-muted-foreground clamp-2">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
