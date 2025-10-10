import { BatteryLow, ShieldAlert, Brain, Frown, HelpCircle, TrendingDown, Battery, FileX } from "lucide-react";

const consequences = [
  {
    icon: BatteryLow,
    title: "Хроническая усталость",
    description: "Постоянная усталость и вялость",
  },
  {
    icon: ShieldAlert,
    title: "Плохое самочувствие",
    description: "Слабый иммунитет, недомогания",
  },
  {
    icon: Brain,
    title: "Сложность с концентрацией",
    description: "Трудности с концентрацией",
  },
  {
    icon: Frown,
    title: "Эмоциональная нестабильность",
    description: "Раздражительность и агрессия",
  },
  {
    icon: HelpCircle,
    title: "Проблемы с памятью",
    description: "Трудности с запоминанием информации",
  },
  {
    icon: TrendingDown,
    title: "Низкая физическая активность",
    description: "Замедленный рост и физическое развитие",
  },
  {
    icon: Battery,
    title: "Снижение мотивации",
    description: "Мало энергии и выносливости",
  },
  {
    icon: FileX,
    title: "Низкая работоспособность",
    description: "Влияние всех факторов",
  },
];

export const DeficiencyConsequences = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Последствия дефицита
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Последствия дефицита витаминов и минералов для организма
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consequences.map((consequence, index) => {
            const Icon = consequence.icon;
            return (
              <div
                key={consequence.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {consequence.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {consequence.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
