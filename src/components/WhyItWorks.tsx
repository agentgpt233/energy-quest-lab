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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Баланс без дефицита — простой способ стать крепче и энергичнее
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Когда организм получает все необходимые нутриенты, вы чувствуете реальные изменения уже через несколько дней
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
