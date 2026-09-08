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
            Более 70&nbsp;% россиян живут с дефицитом микронутриентов и не знают об этом:
            приложения считают только КБЖУ, анализ крови — 5–95 тыс&nbsp;₽ и дни ожидания,
            нутрициолог — от 3&nbsp;000&nbsp;₽. БАД покупают наугад.
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
                <span className="compact-card__icon bg-primary/10">
                  <Icon className="w-[18px] h-[18px] text-primary" aria-hidden="true" />
                </span>
                <h3 className="compact-card__title text-foreground">{consequence.title}</h3>
                <p className="compact-card__text text-muted-foreground">{consequence.description}</p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[13px] leading-relaxed text-muted-foreground">
          Чаще всего с этим сталкиваются женщины 25–45 лет (около 70&nbsp;% аудитории), люди
          в спорте и фитнесе и те, кто держит специальные диеты. Для бизнеса — клиники,
          фитнес-сети и нутрициологи.
          <br />
          <span className="opacity-80">БАД не является лекарственным средством.</span>
        </p>
      </div>
    </section>
  );
};
