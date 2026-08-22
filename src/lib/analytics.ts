/**
 * Цели Яндекс.Метрики. ID счётчика продублирован из index.html.
 * Все вызовы безопасны, если Метрика не загрузилась (блокировщик, оффлайн).
 */
const YM_ID = 105977143;

export type Goal = "click_rustore" | "open_modal" | "click_invest" | "scroll_75";

export const RUSTORE_URL = "https://www.rustore.ru/catalog/app/app.rork.nutritionapp";

export const reachGoal = (goal: Goal, params?: Record<string, unknown>) => {
  try {
    const ym = (window as unknown as { ym?: (...a: unknown[]) => void }).ym;
    if (typeof ym === "function") ym(YM_ID, "reachGoal", goal, params);
  } catch {
    /* аналитика никогда не должна ронять страницу */
  }
};
