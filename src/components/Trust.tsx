import { Atom, ShieldCheck, Users } from "lucide-react";

export const Trust = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background molecule decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Atom className="w-64 h-64 md:w-96 md:h-96 text-primary animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Atom className="w-10 h-10 text-primary animate-glow-pulse" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 break-words">
            Мы объединили биомониторинг, нутрициологию и игровые механики,
            чтобы сделать заботу о теле понятной, научной и увлекательной.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Atom,
                emoji: "🧬",
                title: "Достоверные данные",
                description: "Алгоритмы основаны на данных биомониторинга и подтверждённых исследованиях, а рекомендации — на нормах СанПиН РФ и стандартах ВОЗ.",
              },
              {
                icon: Users,
                emoji: "👩‍⚕️",
                title: "Экспертная команда",
                description: "Приложение создано при участии врачей, нутрициологов и инженеров здоровья.",
              },
              {
                icon: ShieldCheck,
                emoji: "🎮",
                title: "Наука в игровом формате",
                description: "Мы перевели научные данные в понятные квесты, чтобы путь к балансу был простым и мотивирующим ⚡",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 text-primary mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
