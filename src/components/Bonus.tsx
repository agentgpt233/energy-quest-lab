import { Download } from "lucide-react";
import { reachGoal, RUSTORE_URL } from "@/lib/analytics";
import { PhoneFrame } from "./PhoneFrame";

export const Bonus = () => {
  return (
    <section className="section-y bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="free-panel max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:items-center">
            <div>
              <h2 className="text-[25px] sm:text-4xl font-bold text-foreground leading-tight">
                Начните бесплатно — это полноценный режим
              </h2>

              <p className="mt-3 text-[15px] sm:text-lg text-muted-foreground leading-relaxed">
                Анализ еды по фото, дефициты, дневник и награды доступны сразу и бесплатно.
                Активность приносит витакоины — ими открываются дополнительные возможности.
                <br />
                <span className="text-primary font-semibold">
                  Для максимума без ожидания есть подписка Premium.
                </span>
              </p>

              <a
                href={RUSTORE_URL}
                target="_blank"
                rel="noopener"
                onClick={() => reachGoal("click_rustore", { place: "bonus" })}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 sm:px-8 py-4 text-base sm:text-lg font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Download className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>Скачать в RuStore — бесплатно</span>
              </a>

              <p className="mt-2 text-[12.5px] text-muted-foreground">
                Бесплатно · без карты · Android
              </p>
            </div>

            <div className="justify-self-center w-full max-w-[190px]">
              <PhoneFrame
                base="nagrada"
                alt="Экран награды в Medical Mind: квест закрыт, начислены опыт и витакоины"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
