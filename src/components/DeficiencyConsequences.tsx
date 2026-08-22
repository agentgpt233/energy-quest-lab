import { BatteryLow, ShieldAlert, Frown, Battery } from "lucide-react";

const consequences = [
  { icon: BatteryLow,  title: "Хроническая усталость", description: "вялость с самого утра" },
  { icon: ShieldAlert, title: "Слабый иммунитет",      description: "частые недомогания" },
  { icon: Frown,       title: "Раздражительность",     description: "эмоциональные качели" },
  { icon: Battery,     title: "Нет мотивации",         description: "мало сил на цели" },
];

export const DeficiencyConsequences = () => {
  return (
    <section className="section-y bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="section-head text-center max-w-3xl mx-auto">
          <h2 className="text-foreground">Последствия дефицита</h2>
          <p className="text-muted-foreground">
            Дефицит витаминов и минералов — одна из основных причин снижения энергии и мотивации
          </p>
        </div>

        <div className="card-grid cols-2 max-w-3xl mx-auto">
          {consequences.map((consequence) => {
            const Icon = consequence.icon;
            return (
              <div
                key={consequence.title}
                className="compact-card bg-card border border-border hover-lift hover:border-primary/50 hover:shadow-lg"
              >
                <div className="compact-card__head">
                  <span className="compact-card__icon bg-primary/10">
                    <Icon className="w-[18px] h-[18px] text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="compact-card__title text-foreground">{consequence.title}</h3>
                </div>
                <p className="compact-card__text text-muted-foreground">{consequence.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
