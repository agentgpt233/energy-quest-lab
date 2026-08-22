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
    <section className="section-y bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="section-head text-center">
          <h2 className="text-foreground">Что говорят пользователи</h2>
        </div>

        {/* Мобильный — свайп со scroll-snap, десктоп — те же 3 в ряд */}
        <div className="swipe-row max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
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
              <p className="text-[13.5px] sm:text-base text-foreground mb-3 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-3">
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
