export const COOKIES_STORAGE_KEY = "cookiesDecision";
export const COOKIES_RESET_EVENT = "cookies-reset";

export function resetCookiesDecision() {
  localStorage.removeItem(COOKIES_STORAGE_KEY);
  window.dispatchEvent(new Event(COOKIES_RESET_EVENT));
}
