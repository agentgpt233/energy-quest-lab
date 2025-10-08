import { Camera, Lock, DollarSign, Barcode, Brain } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    icon: Camera,
    question: "Нужно ли считать калории?",
    answer: "Нет, приложение делает анализ автоматически по фото.",
  },
  {
    icon: Lock,
    question: "Мои данные защищены?",
    answer: "Да, всё хранится шифрованно, можно удалить в 1 клик.",
  },
  {
    icon: DollarSign,
    question: "Это платно?",
    answer: "Старт бесплатный, подписка — опционально.",
  },
  {
    icon: Barcode,
    question: "Работает без фото?",
    answer: "Да, можно сканировать штрих-код продукта.",
  },
  {
    icon: Brain,
    question: "Откуда берутся нормы?",
    answer: "Из действующих СанПиН РФ и научных рекомендаций ВОЗ.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 animate-fade-in hover:border-primary/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-14 pt-2">
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
