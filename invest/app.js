/* ============================================================================
   MEDICAL MIND · /invest
   ----------------------------------------------------------------------------
   КАК ОБНОВИТЬ ЦИФРЫ: правьте только объект METRICS ниже и меняйте
   METRICS.updated на дату актуальности. Больше нигде числа не дублируются.
   ============================================================================ */

const METRICS = {

  /* --- дата актуальности данных (выводится в блоке «Цифры проекта») --- */
  updated: '24 августа 2026',

  /* --- контакты и ссылки --- */
  email:       'farmico@list.ru',
  mailSubject: 'Инвестиции Medical Mind',
  rustoreUrl:  'https://www.rustore.ru/catalog/app/app.rork.nutritionapp',

  /* Питч-дек: пока файла нет — кнопка автоматически становится «Запросить питч-дек»
     и открывает письмо. Как только PDF положен в assets/, впишите сюда имя файла,
     например 'assets/medical-mind-pitch-deck.pdf' — кнопка станет «Скачать питч-дек». */
  deckUrl:     null,

  /* ID счётчика Яндекс.Метрики (число). Пока null — цели не отправляются. */
  yandexMetrikaId: null,

  /* --- параметры раунда --- */
  /* Финмодель v2.1. Запрос — вилка, зависит от модели команды:
     AI-lean -> 10,5 млн ₽, классический штат -> 19,5 млн ₽. */
  round: {
    amountShort: '10,5–19,5 млн ₽',
    tranchesShort: 'два транша',
    share: 20,
    horizonYears: 3
  },

  /* Тексты по раунду (финмодель v2.1) */
  trancheNote: 'Раунд 10,5–19,5 млн ₽ двумя траншами. Второй транш — только после подтверждения ' +
               'юнит-экономики на живом трафике: инвестор не платит за масштабирование ' +
               'до доказанной конверсии.',
  trancheBreakdown: 'Транш 1 — 7,0 млн ₽: продукт, запуск СТМ, ИИ-оборудование и проверка ' +
                    'юнит-экономики. Транш 2 — 5,5 млн ₽: масштабирование рекламы, ' +
                    'выплачивается только после подтверждения конверсии ≥ 2 % (gate).',
  whyRange: 'Почему вилка. Нижняя граница — AI-lean операционная модель (фаундер + AI-агентная ' +
            'разработка + минимальный наём): выход в прибыль на 7-й месяц. Верхняя — классическая ' +
            'команда с ускоренным наймом. Разница — около 9 млн ₽ и 2 месяца до безубыточности; ' +
            'выбор структуры — совместно с инвестором.',
  riskNote: 'Снижение риска. Модель построена на верифицированных данных: два замера CPI, ' +
            'работающие платежи, фактическая комиссия магазина и себестоимость AI. Два допущения — ' +
            'конверсия и удержание — проверяются в первые 2 месяца на бюджете около 150 тыс ₽ ' +
            'до раскрытия основного капитала.',

  /* --- охраняемые документы (номера) --- */
  patent:    '2867260',
  trademark: '1078105',
  software:  '2025669484',

  /* --- карточки блока «Цифры проекта» ---
     tag: 'fact' — факт, 'est' — оценка, 'fcst' — прогноз                     */
  cards: [
    { value: 13, suffix: '–25', unit: '₽',
      label: 'CPI — стоимость установки',
      note:  'Два верифицированных замера: январь и август 2026, VK Ads.', tag: 'fact' },

    { value: 1000, suffix: '+',
      label: 'установок в RuStore',
      note:  'Живая база пользователей приложения.', tag: 'fact' },

    { value: 5.0, decimals: 1,
      label: 'рейтинг в RuStore',
      note:  'Максимальная оценка пользователей магазина.', tag: 'fact' },

    { value: 999, unit: '₽/мес',
      label: 'подписка Premium',
      note:  'Монетизация работает в проде, платежи проходят.', tag: 'fact' },

    { value: 15, unit: '%',
      label: 'комиссия RuStore',
      note:  'Подтверждена фактической выплатой магазина.', tag: 'fact' },

    { value: 7, unit: 'мес.',
      label: 'выход в операционный плюс',
      note:  'Базовый сценарий финмодели при AI-lean команде.', tag: 'fcst' },

    { value: 28, suffix: '–30', unit: '%',
      label: 'доля БАД и партнёрских сервисов',
      note:  'В выручке к концу второго года.', tag: 'fcst' },

    { value: 50, suffix: '+', unit: 'млрд ₽/год',
      label: 'рынок HealthTech в России',
      note:  'Оценка объёма, рост 12–15 % в год.', tag: 'est' },

    { value: 120, suffix: '+', unit: 'млрд ₽/год',
      label: 'рынок БАД в России',
      note:  'Оценка объёма, рост 12–15 % в год.', tag: 'est' }
  ],


  metricsFootnote: 'CPI подтверждён двумя замерами кампаний VK Ads (январь и август 2026) и будет обновляться. ' +
                   'Рыночные объёмы приведены как оценка, показатели финмодели помечены как прогноз ' +
                   'и не гарантируются.',

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

  /* --- галерея скриншотов (добавить файл в assets/ и строку сюда) --- */
  gallery: [
    { file: 'app-home',     caption: 'Главный экран: нормы и прогресс дня',
      alt:  'Главный экран Medical Mind: анализ по фото, суточная, среднесрочная и долгосрочная норма нутриентов' },
    { file: 'app-analysis', caption: 'Разбор блюда: КБЖУ и нутриенты',
      alt:  'Экран разбора блюда: калории, белки, жиры, углеводы, витамины, минералы и жирные кислоты' }
  ],

  /* --- бизнес-модель --- */
  business: [
    { title: 'Подписка Premium',    text: '999 ₽/мес. Работает в проде, платежи идут.',           state: 'live' },
    { title: 'Витакоины',           text: 'Внутренняя валюта приложения. Работает в проде.',       state: 'live' },
    { title: 'Линейка моно-БАД',    text: '8 SKU. Запуск на инвестиции раунда.',                   state: 'road' },
    { title: 'B2B-лицензирование',  text: 'Клиникам и фитнес-сетям. План после роста базы.',       state: 'road' }
  ],
  arpu: 1139,
  paybackFrom: 1,
  paybackTo: 2,
  ltvCac: 'LTV/CAC 2–3× на консервативных допущениях, 5×+ при целевом удержании',

  /* --- наука и защита --- */
  science: [
    { icon: 'flask',  title: 'ФБУН «Новосибирский НИИ гигиены» Роспотребнадзора',
      text: 'Совместная методика расчёта норм и коррекции дефицитов, клинические подтверждения.' },
    { icon: 'shield', title: 'Патент РФ № {patent}',
      text: 'Способ и система коррекции витаминно-минерального баланса. Действует до 2045 года.' },
    { icon: 'badge',  title: 'Medical Mind® № {trademark}',
      text: 'Товарный знак, охрана до 2034 года. Свидетельство о регистрации ПО № {software}.' },
    { icon: 'star',   title: 'СибБиоНОЦ',
      text: 'Проект в программе научно-образовательного центра мирового уровня, поддержан ' +
            'Правительством Новосибирской области.' }
  ],

  /* --- использование средств (сумма долей должна давать 100 %) --- */
  fundsNote: 'Доли рассчитаны из затрат финмодели v2.1 до точки безубыточности (месяцы 1–7, ' +
             'сценарий база × lean). ИИ-инфраструктура — оборудование и датасеты (CAPEX); ' +
             'СТМ БАД — СГР, «Честный знак» и первая партия; наука и ИС — НИР с НИИ гигиены ' +
             'и патент США.',
  funds: [
    { label: 'Маркетинг и рост',                    percent: 33, color: '#0a6fb3' },
    { label: 'Команда',                             percent: 33, color: '#0f9ee6' },
    { label: 'Собственная ИИ-инфраструктура',       percent: 14, color: '#57c0f4' },
    { label: 'Запуск СТМ БАД',                      percent:  8, color: '#7fd4f7' },
    { label: 'Наука и ИС',                            percent:  5, color: '#9ee7ff' },
    { label: 'Операции, юридическое, резерв',       percent:  8, color: '#c7ecff' }
  ],


  /* --- дорожная карта --- */
  roadmap: [
    { period: 'Мес. 1–3',  text: 'Команда, облачная инфраструктура, первая партия БАД.' },
    { period: 'Мес. 4–6',  text: 'Рост пользовательской базы, выход на iOS, активный маркетинг.' },
    { period: 'Мес. 7–12', text: 'Масштабирование, БАД на маркетплейсах, первые B2B-контракты.' },
    { period: 'Год 2–3',   text: 'Federal scale, выход в СНГ, подготовка раунда Series A.' }
  ],
  revenue: { y1: '≈ 27 млн ₽', y2: '≈ 58 млн ₽', y3: '≈ 60 млн ₽' },

  /* --- команда --- */
  team: [
    { name: 'Борисов Денис Андреевич', initials: 'БД',
      role: 'Директор и основатель. 7 лет в разработке и выводе продуктов функционального питания.' },
    { name: 'Технический директор', initials: 'ТД',
      role: 'ИИ и компьютерное зрение: распознавание блюд, расчётное ядро, инфраструктура.' },
    { name: 'Руководитель качества', initials: 'РК',
      role: 'Аналитика продукта, контроль качества данных и рецептур.' }
  ],
  boardTitle: 'Научный совет',
  boardText:  'Директор и заместитель директора по науке ФБУН «Новосибирский НИИ гигиены» ' +
              'Роспотребнадзора, д.м.н.'
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
    roundAmountShort: METRICS.round.amountShort,
    roundLine: 'Запрос: ' + METRICS.round.amountShort + ' · ' + METRICS.round.tranchesShort +
               ' · доля ' + METRICS.round.share + '% · горизонт ' + METRICS.round.horizonYears + ' года',
    arpuLine: 'ARPU платящего пользователя — ' + nf.format(METRICS.arpu) + ' ₽/мес · окупаемость ' +
              'привлечения ≈ ' + METRICS.paybackFrom + '–' + METRICS.paybackTo + ' мес. · ' +
              METRICS.ltvCac + ' (расчёт по модели)',
    forecastLine: 'Прогноз выручки: год 1 — ' + METRICS.revenue.y1 + ' · год 2 — ' + METRICS.revenue.y2 +
                  ' · год 3 — ' + METRICS.revenue.y3 + ' (базовый сценарий, прогноз — не гарантируется).',
    trancheNote: METRICS.trancheNote,
    trancheBreakdown: METRICS.trancheBreakdown,
    whyRange: METRICS.whyRange,
    riskNote: METRICS.riskNote
  };

  var HREF = { mailto: mailtoHref, mailtoPlain: mailtoHref, rustore: METRICS.rustoreUrl };

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
  var TAGS = { fact: ['tag--fact', 'факт'], est: ['tag--est', 'оценка'], fcst: ['tag--fcst', 'прогноз'] };

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

  /* ---------- галерея ---------- */
  $('#gallery').innerHTML = METRICS.gallery.map(function (g, i) {
    return '<figure class="shot reveal" data-delay="' + i * 90 + '">' +
             '<picture>' +
               '<source type="image/webp" srcset="assets/' + g.file + '.webp">' +
               '<img src="assets/' + g.file + '.jpg" width="560" height="1214" loading="lazy" ' +
                 'decoding="async" alt="' + esc(g.alt) + '">' +
             '</picture>' +
             '<figcaption>' + esc(g.caption) + '</figcaption></figure>';
  }).join('');

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
    star:   '<path d="M12 3.6l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9L12 3.6z"/>'
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
               (f.amount ? '<span class="fund__amt">' + nf.format(f.amount) + ' ₽</span>' : '') +
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
