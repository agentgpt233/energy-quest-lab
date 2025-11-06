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

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Научная основа Medical Mind
          </h2>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Мы объединили биомониторинг, нутрициологию и игровые механики,
            чтобы сделать заботу об организме понятной, научной и увлекательной.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: ShieldCheck,
                title: "Научная достоверность",
                description: "Все данные проверены исследованиями",
              },
              {
                icon: Users,
                title: "Экспертная команда",
                description: "Врачи, нутрициологи и инженеры здоровья",
              },
              {
                icon: Atom,
                title: "Актуальные нормы",
                description: "СанПиН РФ и рекомендации ВОЗ",
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

          {/* Certification Section */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              📜 Подтверждено документально
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Medical Mind — зарегистрированная программа для ЭВМ с официальным свидетельством. 
              <br />
              Все методики прошли клиническую апробацию в ФБУН «Новосибирский НИИ гигиены» Роспотребнадзора.
            </p>

            {/* Certificate Placeholder */}
            <div className="max-w-[300px] mx-auto mb-8">
              <div className="border-2 border-border rounded-lg p-8 bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="text-6xl text-center mb-4">📄</div>
                <p className="text-sm text-center text-muted-foreground leading-relaxed">
                  Свидетельство о регистрации программы ЭВМ Medical Mind
                </p>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
              {[
                { icon: "🏛️", label: "СанПиН РФ" },
                { icon: "🌍", label: "ВОЗ" },
                { icon: "🇪🇺", label: "EFSA" },
                { icon: "🔬", label: "НИИ Гигиены" },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-20 h-20 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                >
                  <div className="text-4xl mb-1">{partner.icon}</div>
                  <p className="text-xs text-muted-foreground text-center">{partner.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
              Методики основаны на более чем 200 клинических исследованиях 
              в области нутрициологии и профилактической медицины
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
