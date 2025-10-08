import { Battery, Brain, TrendingDown, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Battery,
    text: "Усталость и падение фокуса к середине дня.",
  },
  {
    icon: Brain,
    text: "Непонятно, чего не хватает организму.",
  },
  {
    icon: TrendingDown,
    text: "Трудно выстроить привычку — бросаешь через неделю.",
  },
  {
    icon: Clock,
    text: "Нет времени разбираться в нутрициологии.",
  },
];

export const PainPoints = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Почему ты теряешь энергию
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
