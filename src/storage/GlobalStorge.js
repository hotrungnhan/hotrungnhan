import { ref, watch } from 'vue'
import {
  SUPPORT_LOCALES,
  loadLocaleMessages,
  setI18nLanguage,
} from '../plugins/i18n'
export default {
  install: function (Vue, option) {
    setupStorage(Vue, option)
  },
}
function setupStorage(app, option) {
  const isDark = ref(false)
  const updateIsDark = (bool) => {
    isDark.value = bool
  }
  console.log(option.i18n.global.locale)
  const localize = ref(option.i18n.global.locale)
  const updateLocalize = (str) => {
    localize.value = str
  }
  //default watcher
  watch(localize, async (newlocale) => {
    if (!SUPPORT_LOCALES.includes(newlocale)) {
      console.log(`${newlocale} don't exist`)
      return
    }
    console.log(newlocale)
    if (!option.i18n.global.availableLocales.includes(newlocale)) {
      await loadLocaleMessages(option.i18n, newlocale)
    }
    setI18nLanguage(option.i18n, newlocale)
  })
  watch(isDark, (newvalue) => {
    if (newvalue) document.documentElement.classList.add('dark')
    else {
      document.documentElement.classList.remove('dark')
    }
  })
  app.provide('isDark', isDark)
  app.provide('updateIsDark', updateIsDark)
  app.provide('localize', localize)
  app.provide('updateLocalize', updateLocalize)
}
