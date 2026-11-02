import { useEffect, useRef } from "react";

// Партнёрский виджет eSIMGlobe (esimglobe.shop): выбор страны и пакета eSIM прямо на странице,
// оплата — на сайте партнёра в новой вкладке. Пометку «Реклама» и данные рекламодателя выводит сам виджет.
// Встраиваем iframe напрямую, без их скрипта-загрузчика: тот ищет блок один раз при загрузке страницы,
// а в SPA секция может смонтироваться позже. Высоту присылает виджет через postMessage.
const ESIM_ORIGIN = "https://esimglobe.shop";
const PARTNER_CODE = "VC2JLXQ";

export const EsimTravel = () => {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const d = e.data as { type?: string; h?: number } | null;
      if (e.origin !== ESIM_ORIGIN || !d || d.type !== "esimglobe:height") return;
      if (frame.current && e.source === frame.current.contentWindow) {
        frame.current.style.height = `${Math.max(240, Math.min(1400, Number(d.h) || 0))}px`;
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section className="section-y">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1fr_480px] md:gap-10 md:items-center">
          <div>
            <h2 className="text-[25px] sm:text-4xl font-bold text-foreground leading-tight">
              Едете в поездку? Интернет — сразу после посадки
            </h2>
            <p className="mt-3 text-[15px] sm:text-lg text-muted-foreground leading-relaxed">
              eSIM для 220+ направлений от нашего партнёра eSIMGlobe: выберите страну и пакет,
              оплатите онлайн — QR-код для установки придёт на почту.
            </p>
          </div>
          <iframe
            ref={frame}
            src={`${ESIM_ORIGIN}/widget?p=${PARTNER_CODE}`}
            title="eSIM для поездки"
            loading="lazy"
            className="block w-full max-w-[480px] border-0"
            style={{ height: 520 }}
          />
        </div>
      </div>
    </section>
  );
};
