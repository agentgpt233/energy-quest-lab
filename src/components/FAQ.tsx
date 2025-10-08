import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Нужно ли считать калории?",
    answer: "💬 Нет. Мы не считаем калории — важно, какие нутриенты получает организм. Приложение помогает закрывать дефициты и поддерживать энергию дня ⚡",
  },
  {
    question: "Мои данные защищены?",
    answer: "💬 Да. Все данные хранятся в зашифрованном виде и не передаются третьим лицам. Приложение полностью соответствует требованиям безопасности РФ и ЕС.",
  },
  {
    question: "Это платно?",
    answer: "💬 Нет. Приложение бесплатно. Энергию можно получить за витакоины — их легко заработать в игре или купить. При активном участии ресурсов всегда хватает на всё ⚡",
  },
  {
    question: "Работает без фото?",
    answer: "💬 Да. Можно добавлять продукты вручную или по штрих-коду — фото просто ускоряет процесс анализа.",
  },
  {
    question: "Откуда берутся нормы?",
    answer: "💬 Все нормы основаны на СанПиН РФ и международных стандартах (ВОЗ, EFSA). Рекомендации адаптируются под возраст, пол и уровень активности пользователя.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-12 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 break-words">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-4 sm:px-6 animate-fade-in hover:border-primary/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-base sm:text-lg font-semibold break-words">
                        <span className="text-primary">❓</span> {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pl-6 pt-2 break-words">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
