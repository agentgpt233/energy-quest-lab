import { Zap, TrendingDown, HeartCrack, BrainCog, Apple, Download } from "lucide-react";
import { reachGoal, RUSTORE_URL } from "@/lib/analytics";
import { useCountUp } from "@/hooks/useReveal";
import { PhoneFrame } from "./PhoneFrame";

const PAINS = [
  { Icon: TrendingDown, text: "Постоянная усталость и низкая энергия" },
  { Icon: HeartCrack, text: "Тревожность и раздражительность" },
  { Icon: BrainCog, text: "Проблемы с концентрацией" },
];

/* Парящие нутриенты: 4 на мобильных, все 6 на десктопе (бюджет анимаций) */
const ELEMENTS = ["Ca", "Mg", "Zn", "Fe", "K", "Na"];

const SocialProof = () => {
  const installs = useCountUp(1000);
  const rating = useCountUp(5, 1);

  return (
    <p className="hero-social text-sm break-words">
      <strong ref={installs.ref} className="font-semibold tabular-nums">
        {installs.initial}
      </strong>
      <strong className="font-semibold">+</strong> установок ·{" "}
      <strong ref={rating.ref} className="font-semibold tabular-nums">
        {rating.initial}
      </strong>{" "}
      ★ в RuStore · научная база НИИ гигиены Роспотребнадзора
    </p>
  );
};

export const Hero = () => {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Парящие нутриенты — только transform, без JS-циклов */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {ELEMENTS.map((element, i) => (
          <div
            key={element}
            className={`hero-element absolute font-bold text-2xl animate-float ${
              i < 4 ? "block" : "hidden sm:block"
            }`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {element}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-20 relative z-10 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Левая колонка */}
          <div className="space-y-5 sm:space-y-8 w-full max-w-full overflow-hidden">

            <div
              className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border rise"
              style={{ "--rise-delay": "60ms" } as React.CSSProperties}
            >
              <Zap className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">
                ИИ-анализ питания · методика НИИ гигиены
              </span>
            </div>

            {/* Заголовок — LCP-элемент: рисуется сразу, без анимации появления */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight break-words">
              Узнайте, чего не хватает вашему организму, —{" "}
              <span className="hero-accent">по фото еды</span>
            </h1>

            <p
              className="hero-lead text-base sm:text-lg leading-relaxed max-w-2xl rise"
              style={{ "--rise-delay": "180ms" } as React.CSSProperties}
            >
              Medical Mind за секунды рассчитывает КБЖУ и 30+ нутриентов, находит скрытые
              дефициты витаминов и минералов — и возвращает энергию через персональный план
              питания.
            </p>

            {/* Боли — чипами в строку: на телефоне это 2 строки вместо 3 блоков */}
            <ul
              className="chip-row chip-row--mobile rise"
              style={{ "--rise-delay": "240ms" } as React.CSSProperties}
            >
              {PAINS.map(({ Icon, text }) => (
                <li key={text} className="chip">
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Главный CTA — настоящая ссылка, видна в исходнике и ботам */}
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 rise"
              style={{ "--rise-delay": "300ms" } as React.CSSProperties}
            >
              <a
                href={RUSTORE_URL}
                target="_blank"
                rel="noopener"
                onClick={() => reachGoal("click_rustore", { place: "hero" })}
                className="hero-cta-primary inline-flex items-center justify-center gap-2 rounded-md px-6 sm:px-8 py-4 text-sm sm:text-base lg:text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Download className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="break-words">Скачать в RuStore — бесплатно</span>
              </a>

              <span className="hero-cta-secondary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm">
                <Apple className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                Скоро на iOS
              </span>
            </div>

            <div className="rise" style={{ "--rise-delay": "360ms" } as React.CSSProperties}>
              <SocialProof />
            </div>
          </div>

          {/* Правая колонка — один экран приложения */}
          <div
            className="hero-shot relative w-full max-w-full rise"
            style={{ "--rise-delay": "200ms" } as React.CSSProperties}
          >
            <PhoneFrame
              base="glavnaya"
              alt="Главный экран Medical Mind: анализ по фото, суточная норма и сундуки наград"
              eager
              className="hero-shot__frame"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
