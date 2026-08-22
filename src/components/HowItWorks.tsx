import { PhoneFrame } from "./PhoneFrame";

const steps = [
  { number: "1", title: "Сфотографируйте", description: "ИИ распознаёт блюдо и порции",
    screen: "borsch",  alt: "Разбор борща: калории, белки, жиры, углеводы и витамины" },
  { number: "2", title: "Ведите дневник", description: "КБЖУ и нутриенты считаются сами",
    screen: "dnevnik", alt: "Дневник питания за день с приёмами пищи и КБЖУ" },
  { number: "3", title: "Узнайте дефициты", description: "критический / низкий / в норме",
    screen: "normy",   alt: "Суточная норма: 35% элементов без дефицита" },
  { number: "4", title: "Закройте их", description: "подбор блюд под ваши дефициты",
    screen: "podbor",  alt: "Подбор блюд под нехватку нутриентов" },
];

export const HowItWorks = () => {
  return (
    <section className="section-y bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="section-head text-center">
          <h2 className="text-foreground">Как это работает</h2>
          <p className="text-muted-foreground">Всё гениальное просто</p>
        </div>

        {/* Шаг и его экран — одним снап-кадром на телефоне, четырьмя колонками на десктопе */}
        <ol className="steps-strip">
          {steps.map((step) => (
            <li key={step.number}>
              <div className="flex items-start gap-2 mb-3">
                <span className="step-col__num flex-shrink-0" aria-hidden="true">{step.number}</span>
                <div>
                  <h3 className="step-col__title text-foreground">{step.title}</h3>
                  <p className="step-col__text text-muted-foreground">{step.description}</p>
                </div>
              </div>
              <PhoneFrame base={step.screen} alt={step.alt} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
