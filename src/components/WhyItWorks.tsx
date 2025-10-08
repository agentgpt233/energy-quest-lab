import { Camera, Apple, Beaker, Gamepad2, FileText } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "ИИ-анализ по фото",
    description: "Распознаёт состав блюда и нутриенты за секунды",
  },
  {
    icon: Apple,
    title: "Фокус на дефиците, а не на избытке",
    description: "Организм сам выводит излишки, но нехватка нутриентов лишает энергии",
  },
  {
    icon: Beaker,
    title: "Научная база",
    description: "Все рекомендации опираются на нормы СанПиН РФ и международные стандарты",
  },
  {
    icon: Gamepad2,
    title: "Игровая система",
    description: "Сундуки, энергия, витакоины — мотивация остаётся живой",
  },
  {
    icon: FileText,
    title: "Основано на реальных исследованиях",
    description: "Создано совместно с нутрициологами и инженерами здоровья",
  },
];

export const WhyItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Почему это работает
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы объединили научную точность и игровую механику, чтобы забота о себе
            стала естественной привычкой
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
