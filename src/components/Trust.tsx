import { Atom, ShieldCheck, Users } from "lucide-react";
import { useState } from "react";
import { CertificateModal } from "./CertificateModal";

export const Trust = () => {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  return (
    <>
      <CertificateModal 
        isOpen={isCertificateOpen} 
        onClose={() => setIsCertificateOpen(false)} 
      />
    <section className="section-y bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background molecule decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Atom className="w-64 h-64 md:w-96 md:h-96 text-primary animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-4 hidden sm:flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Atom className="w-10 h-10 text-primary animate-glow-pulse" />
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
                  className="p-3 sm:p-6 rounded-xl bg-card border border-border"
                >
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

          {/* Certification Section */}
          <div className="mt-8 sm:mt-12">
            <h3 className="text-[19px] sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-4">
              📜 Подтверждено документально
            </h3>
            <p className="text-[14px] sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Medical Mind — зарегистрированная программа для ЭВМ с официальным свидетельством. 
              <br />
              Все методики прошли клиническую апробацию в ФБУН «Новосибирский НИИ гигиены» Роспотребнадзора.
            </p>

            {/* Certificate Placeholder */}
            <div className="max-w-[220px] sm:max-w-[300px] mx-auto mb-4 sm:mb-6">
              <button
                onClick={() => setIsCertificateOpen(true)}
                className="w-full border-2 border-border rounded-lg p-4 sm:p-8 bg-card shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer group"
              >
                <div className="text-4xl sm:text-6xl text-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform">📄</div>
                <p className="text-sm text-center text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  Свидетельство о регистрации программы ЭВМ Medical Mind
                </p>
                <p className="text-xs text-center text-primary mt-2 font-medium">
                  Нажмите для просмотра
                </p>
              </button>
            </div>

            {/* Источники норм — одним рядом чипов вместо четырёх блоков */}
            <ul className="chip-row justify-center mb-4">
              {[
                { icon: "🏛️", label: "СанПиН РФ" },
                { icon: "🌍", label: "ВОЗ" },
                { icon: "🇪🇺", label: "EFSA" },
                { icon: "🔬", label: "НИИ гигиены" },
              ].map((partner) => (
                <li key={partner.label} className="chip">
                  <span aria-hidden="true">{partner.icon}</span>
                  <span>{partner.label}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
              Методики прошли клиническую апробацию в ФБУН «Новосибирский НИИ гигиены»
              Роспотребнадзора; нормы — СанПиН РФ, ВОЗ, EFSA.
            </p>

            {/* Интеллектуальная собственность */}
            <p className="mt-6 text-sm text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-foreground">Патент РФ № 2867260</span> — способ
              и система коррекции витаминно-минерального баланса (действует до 2045) ·{" "}
              <span className="font-semibold text-foreground">Товарный знак Medical Mind® № 1078105</span> ·{" "}
              <span className="font-semibold text-foreground">Свидетельство на программу для ЭВМ № 2025669484</span>{" "}
              — собственный движок коррекции.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
