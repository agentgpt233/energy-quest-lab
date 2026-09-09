/* ============================================================================
   MEDICAL MIND · /invest
   ----------------------------------------------------------------------------
   КАК ОБНОВИТЬ ЦИФРЫ: правьте только объект METRICS ниже и меняйте
   METRICS.updated на дату актуальности. Больше нигде числа не дублируются.
   ============================================================================ */

const METRICS = {

  /* --- дата актуальности данных (выводится в блоке «Цифры проекта») --- */
  updated: '10 сентября 2026',

  /* --- контакты и ссылки --- */
  email:       'farmico@list.ru',
  mailSubject: 'Инвестиции Medical Mind',
  rustoreUrl:  'https://www.rustore.ru/catalog/app/app.rork.nutritionapp',

  /* Презентация для инвестора, версия 3.3 (12 слайдов). Лежит в public/docs,
     поэтому URL не зависит от папки /invest и не меняется при обновлении файла. */
  deckUrl:     '/docs/Medical_Mind_Презентация_для_инвестора.pdf',

  /* Финансовая модель публично не выкладывается — только по запросу письмом. */
  modelRequestSubject: 'Запрос финансовой модели Medical Mind',

  /* ID счётчика Яндекс.Метрики (число). Пока null — цели не отправляются. */
  yandexMetrikaId: null,

  /* --- параметры раунда (финмодель v3.3) --- */
  round: {
    amountShort: '13,5 млн ₽',
    tranchesShort: 'два графика на выбор',
    share: 20,
    horizonYears: 3
  },

  /* Тексты по раунду */
  trancheNote: 'Раунд 13,5 млн ₽ за 20 %. Два графика на выбор инвестора. ' +
               'А) 7,0 млн (М1) + 6,5 млн (М4, после замера конверсии). ' +
               'Б) 3,5 + 6,0 + 4,0 (М1 / М4 / М6) — риск до первого подтверждения ' +
               'снижен до 3,5 млн ₽.',
  roundFootnote: 'Размер раунда рассчитан по нижней границе ключевого допущения ' +
                 '(конверсия 1,5 %): пик кассового разрыва 11,1 млн ₽.',

  /* Структура владения после сделки */
  ownershipTitle: 'Структура владения после сделки',
  ownership: [
    { label: 'Основатель', percent: 39.4 },
    { label: 'Партнёр',    percent: 40.6 },
    { label: 'Инвестор',   percent: 20 }
  ],
  ownershipNote: 'Казначейская доля 13 % распределяется между участниками пропорционально ' +
                 'до сделки — после закрытия у общества доли нет, дивиденды строго по долям.',

  /* --- охраняемые документы (номера) --- */
  patent:    '2867260',
  trademark: '1078105',
  software:  '2025669484',

  /* --- карточки блока «Цифры проекта» ---
     tag: 'fact' — факт, 'est' — оценка, 'fcst' — прогноз                     */
  cards: [
    { value: 13.31, decimals: 2, unit: '₽',
      label: 'CPI — стоимость установки',
      note:  'Два замера VK Ads: 13,31 ₽ и 25,1 ₽. При масштабировании модель закладывает ' +
             'смешанный CPI 50–60 ₽.', tag: 'fact' },

    { value: 2600, suffix: '+',
      label: 'установок в RuStore',
      note:  'Живая база пользователей приложения.', tag: 'fact' },

    { value: 5.0, decimals: 1,
      label: 'рейтинг в RuStore',
      note:  'Оценки и отзывы открыты на странице приложения.', tag: 'fact' },

    { value: 94, unit: '%',
      label: 'завершают онбординг',
      note:  'Доля дошедших до конца первичной настройки.', tag: 'fact' },

    { value: 999, unit: '₽/мес',
      label: 'подписка Premium',
      note:  'Монетизация работает в проде, платежи проходят через RuStore Pay.', tag: 'fact' },

    { value: 15, unit: '%',
      label: 'комиссия RuStore',
      note:  'Подтверждена фактической выплатой магазина.', tag: 'fact' },

    { value: 7, unit: 'мес.',
      label: 'выход в прибыль',
      note:  'Базовый сценарий финансовой модели.', tag: 'plan' },

    { value: 343, unit: '%',
      label: 'доходность инвестора',
      note:  'MOIC 4,43×, IRR около 64 %. Только дивиденды — 87 %.', tag: 'plan' },

    { value: 7.4, decimals: 1, unit: 'тыс.',
      label: 'платящих подписчиков к М12',
      note:  'К М24 — около 13,4 тыс., к М36 — около 15,1 тыс. MAU бесплатных — около 65 тыс.',
      tag: 'plan' }
  ],

  metricsFootnote: 'Факты подтверждены: CPI — двумя кампаниями VK Ads, цена и комиссия — ' +
                   'прошедшими платежами, права — документами. Показатели с пометкой ' +
                   '«план по модели» — расчёт финансовой модели v3.3, они не гарантируются. ' +
                   'Конверсия в оплату 2 % и отток 20 % — допущения, проверяются замером.',

  /* --- «Как это работает» --- */
  steps: [
    { title: 'Фото блюда',
      text:  'ИИ распознаёт продукты и порции по одной фотографии тарелки. Точность распознавания ≥ 90 %.' },
    { title: 'Разбор за секунды',
      text:  'КБЖУ и 30+ нутриентов, индивидуальные нормы на основе научной базы, подсветка скрытых дефицитов.' },
    { title: 'Персональный план',
      text:  'Продукты и БАД с учётом совместимости компонентов и времени приёма. Запатентованная методика ' +
             'подходит для коррекции любого дефицита — индивидуально, по значениям и нормам.' }
  ],

  /* --- карусель реальных экранов приложения ---
     Файлы лежат в /screens (корень сайта), сжаты до 640px WebP.
     Чтобы добавить кадр: положите NN.webp в public/screens и допишите строку. */
  galleryTitle:    'Продукт уже работает',
  gallerySubtitle: 'Реальные экраны приложения из RuStore, версия 1.6.4',
  gallery: [
    { file: '01', caption: 'Фото — и ИИ определяет блюдо',
      alt: 'Экран камеры: подсказки по съёмке блюда' },
    { file: '02', caption: '30+ нутриентов по каждому блюду',
      alt: 'Карточка борща: калории, белки, жиры и витамины' },
    { file: '03', caption: 'Видим дефициты пользователя',
      alt: 'Суточная норма: 35 % элементов без дефицита' },
    { file: '04', caption: 'Персональный анализ дефицитов',
      alt: 'Коррекция дефицитов: анализ 23 элементов и подбор блюд' },
    { file: '05', caption: 'Запатентованная методика коррекции',
      alt: 'Схема приёма на месяц с научной основой НИИ гигиены' },
    { file: '06', caption: 'Учёт питания по дням',
      alt: 'Дневник питания за день с приёмами пищи и КБЖУ' },
    { file: '07', caption: 'Всё питание в одном экране',
      alt: 'Главный экран: нормы, прогресс и сундуки наград' },
    { file: '08', caption: 'Геймификация удерживает',
      alt: 'Квест закрыт: начислены опыт и витакоины' },
    { file: '09', caption: 'Награды за регулярность',
      alt: 'Экран полученной награды из сундука' },
    { file: '10', caption: 'Монетизация: подписка + витакоины',
      alt: 'Магазин: подписка Premium 999 ₽/мес и пакеты витакоинов' }
  ],

  /* --- бизнес-модель: четыре источника выручки --- */
  business: [
    { title: 'Подписка Premium',
      text: '999 ₽/мес, годовая 5 990 ₽ — roadmap М4. Месячная работает в проде через ' +
            'RuStore Pay. Premium снимает лимиты и рекламу.',
      state: 'live' },
    { title: 'Бесплатные пользователи',
      text: 'Около 97 % базы: витакоины, БАД в приложении и rewarded-реклама. Реклама ' +
            'у бесплатных не только приносит доход, но и подводит к Premium: подписка ' +
            'снимает рекламу и лимиты.',
      state: 'live' },
    { title: 'Собственная марка БАД',
      text: '8 → 16 → 24 SKU. Моно 690 ₽, комплексы 1 290 ₽. Нетто-маржа около 35 % — ' +
            'это расчёт, а не наценка: из себестоимости 170 и 320 ₽ по открытым данным ' +
            'производителей 2025–26 за вычетом комиссии площадки 10 %, логистики 15 %, ' +
            'рекламы 12 % и возвратов 3 %. Маркетплейсы и приложение, QR на упаковке даёт ' +
            'органические установки. Roadmap М4.',
      state: 'road' },
    { title: 'B2B-лицензии Medical Mind PRO',
      text: '15 000 ₽/мес для клиник, фитнес-сетей и нутрициологов. Первые пилоты — через ' +
            'НИИ гигиены и СибБиоНОЦ, дальше нутрициологи по рекомендациям. Договоров пока ' +
            'нет, это план. Roadmap М6.',
      state: 'road' }
  ],
  cacLine: 'Юнит-экономика по модели: вклад подписчика 917 ₽/мес, CAC 2 650–2 900 ₽, ' +
           'окупаемость 2,9 мес., LTV 4 600–5 400 ₽, LTV/CAC 1,7–1,9×.',
  supplementDisclaimer: 'БАД не является лекарственным средством.',

  /* --- откуда взялось допущение о конверсии --- */
  conversionSourceTitle: 'Откуда конверсия 2 %',
  conversionSource: 'Бенчмарки 2026: RevenueCat — медиана «установка → оплата» 2,0 %, ' +
                    'в категории Health & Fitness 2,9 %; Adapty — 1,78 % при онбординг-paywall. ' +
                    'Наши 2 % — ниже медианы категории. Это допущение, оно проверяется замером ' +
                    'в первые два месяца.',

  /* --- план Б --- */
  planBTitle: 'План B',
  planB: 'Если замер конверсии в первые 2 месяца окажется ниже 1,5 % — транш 2 не расходуется, ' +
         'риск инвестора ограничен первым траншем. Продукт переводится в товарный режим: ' +
         'линейка БАД на маркетплейсах и B2B-лицензии, команда — как сегодня, без окладов. ' +
         'По модели первый транш возвратен к концу Года 3 через товарное направление; ' +
         'венчурной доходности в этом режиме нет — это сохранение компании и актива ' +
         '(патент, оборудование, линейка).',

  /* --- правило маркетинга --- */
  marketingRule: 'Мы не планируем рекламный бюджет — задаём правило. С М13 бюджет растёт ' +
                 'на 10 % в месяц ровно пока предельный рубль рекламы окупается не дольше ' +
                 '5 месяцев, а на счету остаётся запас минимум на 2 месяца расходов. ' +
                 'Нарушено — рост останавливается сам. В модели ограничение срабатывает ' +
                 'на уровне около 5 млн ₽ в месяц.',

  /* --- наука и защита --- */
  science: [
    { icon: 'flask',  title: 'ФБУН «Новосибирский НИИ гигиены» Роспотребнадзора',
      text: 'Совместная методика расчёта норм и коррекции дефицитов, клинические подтверждения.' },
    { icon: 'shield', title: 'Патент РФ № {patent}',
      text: 'Способ и система коррекции витаминно-минерального баланса. Действует до 2045 года.' },
    { icon: 'badge',  title: 'Medical Mind® № {trademark}',
      text: 'Товарный знак, охрана до 2034 года. Свидетельство о регистрации ПО № {software}.' },
    { icon: 'globe',  title: 'Международная защита',
      text: 'Подана международная заявка PCT. Приоритет национальных фаз — страны Азии. ' +
            'Срок подачи PCT — до 11 декабря 2026 года.' },
    { icon: 'check',  title: 'Проверка по реестрам',
      text: 'Все три объекта проверяются по номерам в открытых реестрах Роспатента (ФИПС): ' +
            'fips.ru/registers-web.' },
    { icon: 'star',   title: 'СибБиоНОЦ',
      text: 'Проект в программе научно-образовательного центра мирового уровня, поддержан ' +
            'Правительством Новосибирской области.' }
  ],

  /* --- использование средств (сумма долей должна давать 100 %) --- */
  fundsNote: 'Базовая часть 11,5 млн ₽ плюс резерв 2,0 млн, который расходуется только ' +
             'если замер конверсии окажется в диапазоне 1,5–1,75 %. Целевое использование ' +
             'фиксируется в договоре с инвестором.',
  fundsAdNote: 'Рекламный бюджет Года 1 по модели — 25,8 млн ₽ (542 тыс. установок, CPI 50 ₽), ' +
               'это 57 % выручки Года 1. Из раунда финансируются только 4,4 млн ₽ — расходы ' +
               'до выхода в прибыль (7-й месяц); дальше реклама финансируется выручкой.',
  funds: [
    { label: 'Маркетинг',            percent: 38, sum: '4,4 млн ₽', color: '#0a6fb3' },
    { label: 'Команда и найм',       percent: 29, sum: '3,3 млн ₽', color: '#0f9ee6' },
    { label: 'ИИ-инфраструктура',    percent: 15, sum: '1,7 млн ₽', color: '#57c0f4' },
    { label: 'Запуск линейки БАД',   percent: 10, sum: '1,1 млн ₽', color: '#7fd4f7' },
    { label: 'Наука и ИС',           percent:  3, sum: '0,4 млн ₽', color: '#9ee7ff' },
    { label: 'Операции, сделка',     percent:  5, sum: '0,6 млн ₽', color: '#c7ecff' }
  ],


  /* --- дорожная карта --- */
  roadmap: [
    { period: 'Мес. 1–3',  text: 'Команда, облачная инфраструктура, первая партия БАД.' },
    { period: 'Мес. 4–6',  text: 'Рост пользовательской базы, выход на iOS, активный маркетинг.' },
    { period: 'Мес. 7–12', text: 'Масштабирование, БАД на маркетплейсах, первые B2B-контракты.' },
    { period: 'Год 2–3',   text: 'Federal scale, выход в СНГ, подготовка раунда Series A.' }
  ],
  revenue:   { y1: '45,2 млн ₽', y2: '140,5 млн ₽', y3: '167,4 млн ₽' },
  netResult: { y1: '−1,9 млн ₽', y2: '48,7 млн ₽',  y3: '68,7 млн ₽' },

  /* --- «Этот путь мы уже прошли»: опыт в СТМ БАД --- */
  ownStoryTitle: 'Этот путь мы уже прошли',
  ownStoryLead: 'Собственные торговые марки БАД команда выводила и раньше — от сырья ' +
                'до полки в федеральных сетях.',
  ownStory: [
    { title: 'Свои линейки БАД',
      text: 'Омега-3; Омега-3-6-9 «Тюлений жир» со скваленом; Омега-3 Экстра 55 %; Витамин D.' },
    { title: 'Коллаборация «Куми-Куми»',
      text: 'Детская линейка под известным брендом.' },
    { title: 'Каналы продаж',
      text: '«Детский мир», Apteka.ru, аптечные сети.' },
    { title: 'Полный цикл своими силами',
      text: 'Сырьё → контрактное производство → СГР → дизайн и этикетка → вывод в продажи.' }
  ],
  ownStoryConclusion: 'Для нас СТМ — не новый бизнес, а перезапуск отработанного направления ' +
                      'внутри приложения.',

  /* --- команда --- */
  team: [
    { name: 'Основатель, CEO', initials: 'CEO',
      role: 'Продукт, разработка и наука. 7 лет в выводе БАД, полный цикл СТМ до продаж ' +
            'в «Детском мире» и аптеках. Автор патента РФ № 2867260, приложение разработал ' +
            'самостоятельно. Занятость 45 ч/нед.' },
    { name: 'Ведущий разработчик ИИ', initials: 'ИИ',
      role: 'Соавтор свидетельства на программу для ЭВМ № 2025669484 — движок анализа фото. ' +
            'Участвует вне штата, оформление на средства раунда (ML-инженер, М3–М6).' },
    { name: 'SMM и B2B-менеджер', initials: 'SMM',
      role: '5 лет в компании, соцсети и контент по линейкам БАД. Вне штата, оформление ' +
            'на средства раунда: с М1 — SMM, с М2 — B2B (клиники, фитнес-сети).' },
    { name: 'Партнёр (40,6 %)', initials: 'П',
      role: 'Операции и СТМ: производство, СГР, продажи.' },
    { name: 'Научный совет', initials: 'НС',
      role: 'Директор и заместитель директора по науке ФБУН «Новосибирский НИИ гигиены» ' +
            'Роспотребнадзора, оба д.м.н.' }
  ],
  boardTitle: 'План найма на средства раунда',
  boardText:  'Performance-маркетолог — М1, нутрициолог — М3, поддержка — М6. Это план после ' +
              'закрытия раунда: сегодня в проекте никто не получает зарплату, ' +
              'участники помогают вне штата.'
};

/* ============================================================================
   Дальше — рендер и анимации. Правки здесь для обновления цифр не нужны.
   ============================================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nf = new Intl.NumberFormat('ru-RU');
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function fmt(v, d) {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: d || 0, maximumFractionDigits: d || 0
    }).format(v);
  }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function fill(s) {
    return String(s).replace(/\{(\w+)\}/g, function (_, k) { return METRICS[k] || ''; });
  }

  /* ---------- вычисляемые строки ---------- */
  var mailtoHref = 'mailto:' + METRICS.email + '?subject=' + encodeURIComponent(METRICS.mailSubject);

  var TEXT = {
    updated:         METRICS.updated,
    email:           METRICS.email,
    patent:          METRICS.patent,
    metricsFootnote: METRICS.metricsFootnote,
    galleryTitle:    METRICS.galleryTitle,
    gallerySubtitle: METRICS.gallerySubtitle,
    roundAmountShort: METRICS.round.amountShort,
    roundLine: 'Запрос: ' + METRICS.round.amountShort + ' · ' + METRICS.round.tranchesShort +
               ' · доля ' + METRICS.round.share + '% · горизонт ' + METRICS.round.horizonYears + ' года',
    arpuLine: METRICS.cacLine,
    supplementDisclaimer: METRICS.supplementDisclaimer,
    marketingRule: METRICS.marketingRule,
    forecastLine: 'Выручка по годам: ' + METRICS.revenue.y1 + ' · ' + METRICS.revenue.y2 + ' · ' +
                  METRICS.revenue.y3 + '. Чистый результат: ' + METRICS.netResult.y1 + ' · ' +
                  METRICS.netResult.y2 + ' · ' + METRICS.netResult.y3 +
                  ' (план по финансовой модели, не гарантируется).',
    trancheNote: METRICS.trancheNote,
    roundFootnote: METRICS.roundFootnote,
    ownershipTitle: METRICS.ownershipTitle,
    ownershipNote: METRICS.ownershipNote,
    ownStoryTitle: METRICS.ownStoryTitle,
    ownStoryLead: METRICS.ownStoryLead,
    ownStoryConclusion: METRICS.ownStoryConclusion,
    fundsAdNote: METRICS.fundsAdNote,
    planBTitle: METRICS.planBTitle,
    planB: METRICS.planB,
    conversionSourceTitle: METRICS.conversionSourceTitle,
    conversionSource: METRICS.conversionSource
  };

  var modelHref = 'mailto:' + METRICS.email + '?subject=' +
                  encodeURIComponent(METRICS.modelRequestSubject);
  var HREF = { mailto: mailtoHref, mailtoPlain: mailtoHref, rustore: METRICS.rustoreUrl,
               model: modelHref };

  $$('[data-m]').forEach(function (el) {
    var v = TEXT[el.getAttribute('data-m')];
    if (v !== undefined) { el.textContent = v; }
  });
  $$('[data-m-href]').forEach(function (el) {
    var v = HREF[el.getAttribute('data-m-href')];
    if (v) { el.setAttribute('href', v); }
  });

  /* кнопка питч-дека: файл есть — скачивание, файла нет — запрос письмом */
  $$('[data-deck]').forEach(function (el) {
    if (METRICS.deckUrl) {
      el.setAttribute('href', METRICS.deckUrl);
      el.setAttribute('download', '');
      el.textContent = 'Скачать питч-дек (PDF)';
    } else {
      el.setAttribute('href', 'mailto:' + METRICS.email + '?subject=' +
        encodeURIComponent('Запрос питч-дека Medical Mind'));
      el.textContent = 'Запросить питч-дек (PDF)';
    }
  });

  /* ---------- метрики ---------- */
  var TAGS = {
    fact: ['tag--fact', 'факт'],
    est:  ['tag--est',  'оценка'],
    plan: ['tag--fcst', 'план по модели'],
    fcst: ['tag--fcst', 'план по модели']
  };

  $('#metricsGrid').innerHTML = METRICS.cards.map(function (c, i) {
    var t = TAGS[c.tag] || TAGS.fact;
    return '<article class="metric reveal" data-delay="' + (i % 3) * 70 + '">' +
             '<span class="tag ' + t[0] + '">' + t[1] + '</span>' +
             '<div class="metric__val"><span class="counter" data-to="' + c.value +
               '" data-dec="' + (c.decimals || 0) + '">' + fmt(0, c.decimals) + '</span>' +
               (c.suffix ? esc(c.suffix) : '') +
               (c.unit ? '<span class="unit">' + esc(c.unit) + '</span>' : '') +
             '</div>' +
             '<p class="metric__label">' + esc(c.label) + '</p>' +
             '<p class="metric__note">' + esc(c.note) + '</p>' +
           '</article>';
  }).join('');

  /* ---------- шаги ---------- */
  $('#stepsList').innerHTML = METRICS.steps.map(function (s, i) {
    return '<li class="step reveal" data-delay="' + i * 90 + '">' +
             '<span class="step__num" aria-hidden="true">' + (i + 1) + '</span>' +
             '<h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></li>';
  }).join('');

  /* ---------- карусель экранов ---------- */
  var galleryEl = $('#gallery');
  if (galleryEl) {
    galleryEl.innerHTML =
      '<div class="shots__track" id="shotsTrack">' +
        METRICS.gallery.map(function (g, i) {
          return '<figure class="shot">' +
                   '<div class="shot__frame">' +
                     '<img src="/screens/' + g.file + '.webp" width="640" height="1422" ' +
                       'loading="' + (i < 2 ? 'eager' : 'lazy') + '" decoding="async" ' +
                       'alt="' + esc(g.alt) + '">' +
                   '</div>' +
                   '<figcaption>' + esc(g.caption) + '</figcaption>' +
                 '</figure>';
        }).join('') +
      '</div>' +
      '<button type="button" class="shots__arrow shots__arrow--prev" id="shotsPrev" ' +
        'aria-label="Предыдущий экран">&#8249;</button>' +
      '<button type="button" class="shots__arrow shots__arrow--next" id="shotsNext" ' +
        'aria-label="Следующий экран">&#8250;</button>' +
      '<div class="shots__dots" id="shotsDots" role="tablist" aria-label="Экраны приложения">' +
        METRICS.gallery.map(function (g, i) {
          return '<button type="button" role="tab" class="shots__dot' + (i === 0 ? ' is-active' : '') +
                 '" aria-selected="' + (i === 0) + '" aria-label="' + esc(g.caption) + '"></button>';
        }).join('') +
      '</div>';

    initShots();
  }

  function initShots() {
    var track = $('#shotsTrack');
    var dots  = $$('#shotsDots .shots__dot');
    if (!track) { return; }

    var active = 0, paused = false, timer = null, ticking = false;

    function slideStep() {
      var first = track.firstElementChild;
      if (!first) { return 0; }
      var gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
      return first.getBoundingClientRect().width + gap;
    }

    function setActive(i) {
      if (i === active) { return; }
      active = i;
      dots.forEach(function (d, n) {
        d.classList.toggle('is-active', n === i);
        d.setAttribute('aria-selected', n === i);
      });
    }

    function goTo(i, smooth) {
      var n = (i + METRICS.gallery.length) % METRICS.gallery.length;
      track.scrollTo({ left: slideStep() * n, behavior: smooth === false ? 'auto' : 'smooth' });
    }

    track.addEventListener('scroll', function () {
      if (ticking) { return; }
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var step = slideStep();
        if (step) { setActive(Math.min(Math.max(Math.round(track.scrollLeft / step), 0),
                                       METRICS.gallery.length - 1)); }
      });
    }, { passive: true });

    $('#shotsPrev').addEventListener('click', function () { goTo(active - 1); });
    $('#shotsNext').addEventListener('click', function () { goTo(active + 1); });
    dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); }); });

    /* автопрокрутка: не стартует при prefers-reduced-motion, встаёт при
       наведении, фокусе и касании */
    function start() {
      if (reduced || timer) { return; }
      timer = window.setInterval(function () {
        if (!paused) { goTo(active + 1); }
      }, 4000);
    }
    function hold()    { paused = true; }
    function release() { paused = false; }

    ['mouseenter', 'focusin', 'touchstart', 'pointerdown'].forEach(function (e) {
      galleryEl.addEventListener(e, hold, { passive: true });
    });
    ['mouseleave', 'focusout', 'touchend', 'touchcancel'].forEach(function (e) {
      galleryEl.addEventListener(e, release, { passive: true });
    });

    start();
  }

  /* ---------- бизнес-модель ---------- */
  $('#modelGrid').innerHTML = METRICS.business.map(function (b, i) {
    var live = b.state === 'live';
    return '<article class="card card--pill reveal" data-delay="' + (i % 4) * 70 + '">' +
             '<span class="pill ' + (live ? 'pill--live' : 'pill--road') + '">' +
               (live ? 'в проде' : 'roadmap') + '</span>' +
             '<h3>' + esc(b.title) + '</h3><p>' + esc(b.text) + '</p></article>';
  }).join('');

  /* ---------- наука ---------- */
  var ICONS = {
    flask:  '<path d="M9 3h6M10 3v5.5L4.8 17A2 2 0 0 0 6.5 20h11a2 2 0 0 0 1.7-3L14 8.5V3"/>',
    shield: '<path d="M12 3l7 3v6c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6l7-3z"/><path d="M9.2 12.2l2 2 3.6-3.8"/>',
    badge:  '<circle cx="12" cy="9" r="5.2"/><path d="M8.4 13.4L7 21l5-2.4L17 21l-1.4-7.6"/>',
    star:   '<path d="M12 3.6l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9L12 3.6z"/>',
    globe:  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z"/>',
    check:  '<path d="M4.5 12.5l5 5 10-11"/>'
  };
  $('#scienceGrid').innerHTML = METRICS.science.map(function (s, i) {
    return '<article class="card reveal" data-delay="' + (i % 2) * 90 + '">' +
             '<span class="card__icon" aria-hidden="true">' +
               '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
                 'stroke-linecap="round" stroke-linejoin="round">' + ICONS[s.icon] + '</svg></span>' +
             '<h3>' + esc(fill(s.title)) + '</h3><p>' + esc(fill(s.text)) + '</p></article>';
  }).join('');

  /* ---------- использование средств ---------- */
  var R = 76, C = 2 * Math.PI * R, GAP = 3, acc = 0, segs = '';
  METRICS.funds.forEach(function (f) {
    var len = C * f.percent / 100;
    segs += '<circle class="donut__seg" cx="100" cy="100" r="' + R + '" stroke="' + f.color +
            '" data-len="' + Math.max(len - GAP, 1) + '" stroke-dashoffset="' + (-acc) + '"></circle>';
    acc += len;
  });
  $('#donutSegments').innerHTML = segs;

  var fundsNoteEl = $('#fundsNote');
  if (fundsNoteEl) { fundsNoteEl.textContent = METRICS.fundsNote; }

  $('#fundsList').innerHTML = METRICS.funds.map(function (f) {
    return '<li class="fund">' +
             '<div class="fund__top">' +
               '<span class="fund__dot" style="background:' + f.color + '"></span>' +
               '<span class="fund__name">' + esc(f.label) + '</span>' +
               '<span class="fund__pct">' + f.percent + '%</span>' +
               (f.sum ? '<span class="fund__amt">' + esc(f.sum) + '</span>' : '') +
             '</div>' +
             '<div class="fund__bar"><span class="fund__fill" data-w="' + f.percent +
               '" style="background:' + f.color + '"></span></div></li>';
  }).join('');

  /* ---------- дорожная карта ---------- */
  $('#roadList').innerHTML = METRICS.roadmap.map(function (r, i) {
    return '<li class="road__item reveal" data-delay="' + i * 90 + '">' +
             '<p class="road__period">' + esc(r.period) + '</p>' +
             '<p class="road__text">' + esc(r.text) + '</p></li>';
  }).join('');

  /* ---------- команда ---------- */
  $('#teamGrid').innerHTML = METRICS.team.map(function (p, i) {
    return '<article class="card reveal" data-delay="' + i * 80 + '"><div class="person">' +
             '<span class="person__ava" aria-hidden="true">' + esc(p.initials) + '</span>' +
             '<div><p class="person__name">' + esc(p.name) + '</p>' +
             '<p class="person__role">' + esc(p.role) + '</p></div></div></article>';
  }).join('');

  $('#board').innerHTML = '<b>' + esc(METRICS.boardTitle) + '</b><p>' + esc(METRICS.boardText) + '</p>';

  /* ---------- структура владения после сделки ---------- */
  var ownEl = $('#ownershipGrid');
  if (ownEl) {
    ownEl.innerHTML = METRICS.ownership.map(function (o, i) {
      return '<article class="metric reveal" data-delay="' + i * 70 + '">' +
               '<div class="metric__val">' + fmt(o.percent, o.percent % 1 ? 1 : 0) +
                 '<span class="unit">%</span></div>' +
               '<p class="metric__label">' + esc(o.label) + '</p>' +
             '</article>';
    }).join('');
  }

  /* ---------- «Этот путь мы уже прошли» ---------- */
  var storyEl = $('#ownStoryGrid');
  if (storyEl) {
    storyEl.innerHTML = METRICS.ownStory.map(function (o, i) {
      return '<article class="card reveal" data-delay="' + (i % 2) * 90 + '">' +
               '<h3>' + esc(o.title) + '</h3><p>' + esc(o.text) + '</p></article>';
    }).join('');
  }

  /* ==========================================================================
     Анимации
     ========================================================================== */

  /* появление секций */
  var revealItems = $$('.reveal');
  revealItems.forEach(function (el) {
    var d = el.getAttribute('data-delay');
    if (d) { el.style.setProperty('--d', d + 'ms'); }
  });

  function runCounter(el) {
    var to  = parseFloat(el.getAttribute('data-to'));
    var dec = parseInt(el.getAttribute('data-dec'), 10) || 0;
    if (reduced) { el.textContent = fmt(to, dec); return; }
    var start = null, dur = 1300;
    function tick(ts) {
      if (start === null) { start = ts; }
      var p = Math.min((ts - start) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(to * e, dec);
      if (p < 1) { requestAnimationFrame(tick); } else { el.textContent = fmt(to, dec); }
    }
    requestAnimationFrame(tick);
  }

  function activate(el) {
    el.classList.add('is-in');
    $$('.counter', el).forEach(function (c) {
      if (!c.dataset.done) { c.dataset.done = '1'; runCounter(c); }
    });
  }

  function showAllAtOnce() {
    revealItems.forEach(activate);
    $$('.donut__seg').forEach(function (s) { s.style.strokeDasharray = s.getAttribute('data-len') + ' ' + C; });
    $$('.fund__fill').forEach(function (b) { b.style.width = b.getAttribute('data-w') + '%'; });
    var r = $('#roadList'); if (r) { r.classList.add('is-drawn'); }
  }

  if (reduced) {
    /* пользователь просил уменьшить анимацию — показываем всё сразу */
    showAllAtOnce();
  } else if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { activate(en.target); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    revealItems.forEach(function (el) { io.observe(el); });

    /* диаграмма и бары «Использования средств» */
    var fundsBlock = $('.funds');
    var fio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) { return; }
        $$('.donut__seg').forEach(function (s) {
          s.style.strokeDasharray = s.getAttribute('data-len') + ' ' + C;
        });
        $$('.fund__fill').forEach(function (b) { b.style.width = b.getAttribute('data-w') + '%'; });
        fio.unobserve(en.target);
      });
    }, { threshold: 0.25 });
    if (fundsBlock) { fio.observe(fundsBlock); }

    /* линия дорожной карты */
    var road = $('#roadList');
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-drawn'); rio.unobserve(en.target); }
      });
    }, { threshold: 0.2 });
    if (road) { rio.observe(road); }
  } else {
    showAllAtOnce();
  }

  /* прогресс-бар, липкая навигация, параллакс */
  var nav = $('#nav'), bar = $('#scrollBar'), blobs = $$('[data-parallax]'), ticking = false;

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) { bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%'; }
    nav.classList.toggle('is-stuck', y > window.innerHeight * 0.6);
    if (!reduced && y < window.innerHeight * 1.4) {
      blobs.forEach(function (b) {
        b.style.transform = 'translate3d(0,' + (y * parseFloat(b.getAttribute('data-parallax'))).toFixed(1) + 'px,0)';
      });
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* цели Яндекс.Метрики: invest_mailto / invest_deck / invest_rustore */
  document.addEventListener('click', function (e) {
    if (!METRICS.yandexMetrikaId || typeof window.ym !== 'function') { return; }
    var a = e.target.closest ? e.target.closest('[data-goal]') : null;
    if (!a) { return; }
    window.ym(METRICS.yandexMetrikaId, 'reachGoal', 'invest_' + a.getAttribute('data-goal'));
  });
})();
