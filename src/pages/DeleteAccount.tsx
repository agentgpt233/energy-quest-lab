import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Check, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();

  const handleEmailSupport = () => {
    window.location.href = "mailto:farmico@list.ru?subject=Удаление аккаунта - Коррекция Питания";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm pb-4 mb-6 border-b border-border">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад
            </Button>
            <h1 className="text-2xl font-bold text-foreground">
              Удаление аккаунта и данных
            </h1>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-muted-foreground">
            Для удаления вашего аккаунта и всех связанных с ним данных из приложения "Коррекция Питания", следуйте инструкциям ниже.
          </p>

          {/* Как удалить аккаунт */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Как удалить аккаунт:</h2>
            <ol className="space-y-3 list-decimal list-inside text-foreground">
              <li>
                Отправьте запрос на email: <strong>farmico@list.ru</strong>
              </li>
              <li>
                Тема письма: <strong>"Удаление аккаунта - Коррекция Питания"</strong>
              </li>
              <li>
                Укажите в письме:
                <ul className="ml-8 mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Ваш email, зарегистрированный в приложении</li>
                  <li>Причина удаления (опционально)</li>
                </ul>
              </li>
            </ol>
            <Button 
              onClick={handleEmailSupport}
              className="gap-2 mt-4"
              size="lg"
            >
              <Mail className="w-4 h-4" />
              Написать в поддержку
            </Button>
          </section>

          {/* Сроки обработки */}
          <section className="space-y-4 bg-muted/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-foreground">Сроки обработки:</h2>
            <p className="text-foreground">
              Мы обработаем ваш запрос и удалим данные в течение <strong>30 дней</strong> с момента получения.
            </p>
          </section>

          {/* Какие данные будут удалены */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Какие данные будут удалены:</h2>
            <ul className="space-y-2">
              {[
                "Личная информация (имя, возраст, пол)",
                "Email и контактные данные",
                "Дневник питания",
                "История AI-анализов",
                "Баланс Vitacoins",
                "Все настройки и предпочтения"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Важно */}
          <section className="space-y-4 border-l-4 border-destructive pl-6 py-2">
            <h2 className="text-xl font-semibold text-foreground">Важно:</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  После удаления аккаунта восстановление данных будет невозможно.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground">
                  Если у вас есть активные подписки, отмените их перед удалением аккаунта.
                </p>
              </div>
            </div>
          </section>

          {/* Вопросы */}
          <section className="space-y-4 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-foreground">Вопросы?</h2>
            <p className="text-muted-foreground">Если у вас возникли вопросы, свяжитесь с нами:</p>
            <ul className="space-y-2 text-foreground">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:farmico@list.ru" className="text-primary hover:underline">
                  farmico@list.ru
                </a>
              </li>
              <li>
                <strong>Веб-сайт:</strong>{" "}
                <a href="https://medicalmind.ru" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  https://medicalmind.ru
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
