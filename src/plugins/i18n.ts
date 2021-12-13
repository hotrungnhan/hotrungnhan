import { nextTick } from 'vue'
import { Composer, createI18n, I18n, useI18n } from 'vue-i18n'
export const SUPPORT_LOCALES = ['en', 'vi']
export function setupI18n() {
  const defaultLocale = import.meta.env.VUE_APP_I18N_LOCALE || "en";
  const fallbackLocale = import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "en";
  const i18n = createI18n({
    locale: defaultLocale as string,
    legacy: false,
    fallbackLocale: fallbackLocale as string,
    silentFallbackWarn: true,
    silentTranslationWarn: true,
  })
  loadLocaleMessages(i18n.global as unknown as Composer, defaultLocale as string)
  setI18nLanguage(i18n.global as unknown as Composer, defaultLocale as string)
  return i18n
}

export function setI18nLanguage(i18n: Composer<any, any, any, any>, locale: string) {
  i18n.locale.value = locale
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n: Composer<any, any, any, any>, locale: string) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `.././locales/${locale}.json`
  )
  // set locale and locale message
  i18n.setLocaleMessage(locale, messages.default)
  return nextTick()
}