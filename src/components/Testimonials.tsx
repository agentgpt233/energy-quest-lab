import { Star } from "lucide-react";

const testimonials = [
  {
    text: "За неделю узнала, что у меня дефицит витамина D и магния. Начала корректировать питание по рекомендациям — усталость ушла, сплю намного лучше! Энергия выросла с 3/10 до 8/10.",
    author: "Мария, 27",
    role: "менеджер по продажам",
    rating: 5,
  },
  {
    text: "Фото вместо подсчёта калорий — это гениально! Раньше бросал через неделю, а тут увлёкся квестами и витакоинами. Уже месяц следую рекомендациям, самочувствие отличное.",
    author: "Иван, 32",
    role: "разработчик",
    rating: 5,
  },
  {
    text: "Отчёт показал дефицит железа и B12 — объяснил мою постоянную вялость. Врач подтвердил анализы. Теперь корректирую рацион осознанно. Результат за 2 недели заметен!",
    author: "Анна, 29",
    role: "дизайнер",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Что говорят пользователи
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-base text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
