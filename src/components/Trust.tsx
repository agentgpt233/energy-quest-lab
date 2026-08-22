import { Atom, FlaskConical, Award, FileCheck, BadgeCheck } from "lucide-react";

const items = [
  { icon: FlaskConical, title: "ФБУН «Новосибирский НИИ гигиены» Роспотребнадзора",
    note: "совместная методика · клиническая апробация" },
  { icon: Award,        title: "Патент РФ № 2867260",
    note: "способ и система коррекции баланса · до 2045" },
  { icon: FileCheck,    title: "Свидетельство ПО № 2025669484",
    note: "собственный движок коррекции" },
  { icon: BadgeCheck,   title: "Medical Mind® № 1078105",
    note: "зарегистрированный товарный знак" },
];

const sources = ["СанПиН РФ", "ВОЗ", "EFSA", "НИИ гигиены"];

export const Trust = () => {
  return (
    <section className="section-y bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none" aria-hidden="true">
        <Atom className="w-64 h-64 md:w-96 md:h-96 text-primary animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="section-head text-center mx-auto max-w-3xl">
            <h2 className="text-foreground">Научная основа и защита</h2>
            <p className="text-muted-foreground">
              Мы объединили нутрициологию, ИИ и игровые механики — и подтвердили методику
              документами.
            </p>
          </div>

          <ul className="card-grid cols-2 md:!grid-cols-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="compact-card bg-card border border-border">
                  <span className="compact-card__icon bg-primary/10">
                    <Icon className="w-[18px] h-[18px] text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="compact-card__title text-foreground">{item.title}</h3>
                  <p className="compact-card__text text-muted-foreground">{item.note}</p>
                </li>
              );
            })}
          </ul>

          <ul className="chip-row justify-center mt-6">
            {sources.map((label) => (
              <li key={label} className="chip">{label}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
