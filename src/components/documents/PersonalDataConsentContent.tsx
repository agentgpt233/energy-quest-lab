export const PersonalDataConsentContent = () => (
  <>
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#4CAF50] mb-2">
        СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
      </h2>
      <p className="text-lg text-[#666]">Мобильное приложение Medical Mind</p>
    </div>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">ОПЕРАТОР ПД:</h3>
      <p>ООО «ФармиКо»</p>
      <p>ИНН: 5433970294, КПП: 543301001, ОГРН: 1195476028736</p>
      <p>Адрес: 630559, Новосибирская область, р.п. Кольцово, д. 12, оф.2</p>
      <p>Email: farmico@list.ru</p>
      <p>Телефон: +7 (383) 202-19-09</p>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">СОГЛАСИЕ:</h3>
      <p>Я, пользователь Medical Mind, добровольно даю согласие на обработку моих персональных данных.</p>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">ЦЕЛИ ОБРАБОТКИ:</h3>
      <ul className="list-none space-y-1 pl-4">
        <li>• Регистрация и идентификация</li>
        <li>• AI-анализ фотографий продуктов</li>
        <li>• Расчет нутриентов</li>
        <li>• Дневник питания</li>
        <li>• Персональные рекомендации</li>
        <li>• Техподдержка</li>
        <li>• Улучшение сервиса</li>
      </ul>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">ОБРАБАТЫВАЕМЫЕ ДАННЫЕ:</h3>
      <ul className="list-none space-y-1 pl-4">
        <li>• Email, имя, пароль</li>
        <li>• Пол, возраст, вес, рост (добровольно)</li>
        <li>• Пищевые предпочтения (добровольно)</li>
        <li>• Фотографии продуктов</li>
        <li>• Данные о питании</li>
        <li>• Технические данные (IP, устройство)</li>
      </ul>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">ДЕЙСТВИЯ С ДАННЫМИ:</h3>
      <p>Сбор, хранение, использование, передача, удаление.</p>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">ПЕРЕДАЧА ТРЕТЬИМ ЛИЦАМ:</h3>
      <p className="font-semibold text-red-600 mb-3">⚠️ НЕ продаем данные!</p>
      <p className="mb-2">Передаем:</p>
      <ul className="list-none space-y-1 pl-4">
        <li>• AI-сервисам (OpenRouter API) для анализа</li>
        <li>• Платежным системам (при подписке)</li>
        <li>• Госорганам (по запросам)</li>
      </ul>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">СПОСОБЫ ЗАЩИТЫ:</h3>
      <ul className="list-none space-y-1 pl-4">
        <li>🔒 Шифрование SSL/TLS, AES-256</li>
        <li>🔒 Ограничение доступа</li>
        <li>🔒 Серверы в РФ</li>
      </ul>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">СРОК ДЕЙСТВИЯ:</h3>
      <ul className="list-none space-y-1 pl-4">
        <li>• До удаления аккаунта</li>
        <li>• После удаления: полное удаление за 30 дней</li>
      </ul>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">ОТЗЫВ СОГЛАСИЯ:</h3>
      <p className="mb-2">Способы:</p>
      <ul className="list-none space-y-1 pl-4 mb-3">
        <li>• В приложении: Настройки → Удалить аккаунт</li>
        <li>• Email: farmico@list.ru</li>
        <li>• Письменно на адрес компании</li>
      </ul>
      <p>Последствия: удаление аккаунта и всех данных.</p>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">МОИ ПРАВА:</h3>
      <ul className="list-none space-y-1 pl-4">
        <li>✓ Доступ к данным</li>
        <li>✓ Исправление</li>
        <li>✓ Удаление</li>
        <li>✓ Ограничение обработки</li>
        <li>✓ Отзыв согласия</li>
        <li>✓ Жалоба в Роскомнадзор</li>
      </ul>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">ПОДТВЕРЖДЕНИЕ:</h3>
      <ul className="list-none space-y-1 pl-4">
        <li>✅ Ознакомился с условиями</li>
        <li>✅ Понимаю последствия</li>
        <li>✅ Даю согласие добровольно</li>
      </ul>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-[#4CAF50] mb-3">КОНТАКТЫ:</h3>
      <p>ООО «ФармиКо»</p>
      <p>farmico@list.ru</p>
      <p>+7 (383) 202-19-09</p>
      <div className="mt-4">
        <p className="font-semibold">РОСКОМНАДЗОР:</p>
        <p>rsoc@rkn.gov.ru</p>
        <p>8 (800) 707-77-07</p>
      </div>
    </section>

    <div className="text-center text-[#666] pt-6 border-t">
      <p>© 2025 ООО «ФармиКо»</p>
    </div>
  </>
);
