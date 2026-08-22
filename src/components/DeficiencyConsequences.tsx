import { BatteryLow, ShieldAlert, Brain, Frown, Battery, FileX } from "lucide-react";

const consequences = [
  { icon: BatteryLow,  title: "Хроническая усталость",   description: "вялость с самого утра" },
  { icon: ShieldAlert, title: "Слабый иммунитет",        description: "частые недомогания" },
  { icon: Brain,       title: "Туман в голове",          description: "сложно сосредоточиться" },
  { icon: Frown,       title: "Раздражительность",       description: "эмоциональные качели" },
  { icon: Battery,     title: "Нет мотивации",           description: "мало сил на цели" },
  { icon: FileX,       title: "Низкая работоспособность", description: "всё даётся труднее" },
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

        <p
          className="max-w-[700px] mx-auto text-center text-foreground leading-relaxed text-[14.5px] sm:text-lg"
          style={{ marginBottom: "var(--head-gap)" }}
        >
          Каждый день вы чувствуете, что организм работает не на полную мощность. Вроде бы ничего
          серьёзного, но… эта усталость накапливается, мотивация падает, и даже простые задачи
          даются с трудом. Знакомо?
        </p>

        <div className="card-grid cols-3-desk max-w-5xl mx-auto">
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
