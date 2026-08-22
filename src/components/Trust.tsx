import { Atom, ShieldCheck, Users, Award, FileCheck, BadgeCheck } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Научная достоверность", description: "Все данные проверены исследованиями" },
  { icon: Users,       title: "Экспертная команда",    description: "Врачи, нутрициологи и инженеры здоровья" },
  { icon: Atom,        title: "Актуальные нормы",      description: "СанПиН РФ и рекомендации ВОЗ" },
];

const sources = ["СанПиН РФ", "ВОЗ", "EFSA", "НИИ гигиены"];

const ip = [
  { icon: Award,      title: "Патент РФ № 2867260",          note: "способ и система коррекции баланса · до 2045" },
  { icon: FileCheck,  title: "Свидетельство ПО № 2025669484", note: "собственный движок коррекции" },
  { icon: BadgeCheck, title: "Medical Mind® № 1078105",       note: "зарегистрированный товарный знак" },
];

export const Trust = () => {
  return (
    <section className="section-y bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none" aria-hidden="true">
        <Atom className="w-64 h-64 md:w-96 md:h-96 text-primary animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 hidden sm:flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Atom className="w-10 h-10 text-primary" aria-hidden="true" />
            </div>
          </div>

          <h2 className="text-[25px] sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Научная основа Medical Mind
          </h2>

          <p className="text-[15px] sm:text-xl text-muted-foreground leading-relaxed mt-3 mb-6 sm:mb-10">
            Мы объединили биомониторинг, нутрициологию и игровые механики,
            чтобы сделать заботу об организме понятной, научной и увлекательной.
          </p>

          <div className="grid grid-cols-3 gap-[var(--grid-gap)]">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-3 sm:p-6 rounded-xl bg-card border border-border">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-4 mx-auto" aria-hidden="true" />
                  <h3 className="text-[12.5px] sm:text-lg font-semibold text-foreground leading-tight mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-sm text-muted-foreground leading-snug">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Наука и защита */}
          <div className="mt-8 sm:mt-12">
            <h3 className="text-[19px] sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-4">
              Наука и защита
            </h3>

            <p className="text-[14px] sm:text-lg text-muted-foreground mb-4 leading-relaxed">
              Методика Medical Mind разработана вместе с ФБУН «Новосибирский НИИ гигиены»
              Роспотребнадзора и прошла клиническую апробацию. Нормы потребления — СанПиН РФ,
              ВОЗ, EFSA.
            </p>

            <ul className="chip-row justify-center mb-6">
              {sources.map((label) => (
                <li key={label} className="chip">{label}</li>
              ))}
            </ul>

            <ul className="card-grid cols-3-desk text-left">
              {ip.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="compact-card bg-card border border-border">
                    <div className="compact-card__head">
                      <span className="compact-card__icon bg-primary/10">
                        <Icon className="w-[18px] h-[18px] text-primary" aria-hidden="true" />
                      </span>
                      <h4 className="compact-card__title text-foreground">{item.title}</h4>
                    </div>
                    <p className="compact-card__text text-muted-foreground">{item.note}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
