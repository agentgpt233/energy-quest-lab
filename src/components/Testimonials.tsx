import { Star } from "lucide-react";

const testimonials = [
  {
    text: "За неделю узнала, чего не хватает, и стала меньше уставать.",
    author: "Мария, 27",
    rating: 5,
  },
  {
    text: "Фото вместо подсчёта калорий — удобно и увлекательно.",
    author: "Иван, 32",
    rating: 5,
  },
  {
    text: "Отчёт понятный, а квесты реально мотивируют.",
    author: "Анна, 29",
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
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
