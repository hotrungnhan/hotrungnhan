import { ref, watch } from 'vue'
import { CircularLinkList } from '../ultis/CircularLinklist'
import {
  SUPPORT_LOCALES,
  loadLocaleMessages,
  setI18nLanguage,
} from '../plugins/i18n'

function setupStorage(app, option) {
  ///declare storage
  const listtheme = new CircularLinkList('light', 'dark', 'sys')
  const currenttheme = ref()
  const isDark = ref()
  const locale = option.i18n.global.locale
  //watcher
  watch(currenttheme, (newvalue) => {
    localStorage.setItem('prefer-theme', newvalue)
    if (newvalue == 'sys') {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    } else {
      return (isDark.value = newvalue == 'dark')
    }
  })
  watch(isDark, (newvalue) => {
    newvalue
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  })
  watch(locale, async (newlocale) => {
    if (!SUPPORT_LOCALES.includes(newlocale)) {
      console.log(`${newlocale} don't exist`)
      return
    }
    console.log(newlocale)
    if (!option.i18n.global.availableLocales.includes(newlocale)) {
      await loadLocaleMessages(option.i18n, newlocale)
    }
    localStorage.setItem('locale', newlocale)
    setI18nLanguage(option.i18n, newlocale)
  })
  //event
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', function (e) {
      if (currenttheme.value == 'sys') updateIsDark(e.matches)
    })
  ///default variabble to active watcher one time
  currenttheme.value = localStorage.getItem('prefer-theme') || 'sys'
  locale.value = localStorage.getItem('locale') || locale.value
  //function
  function updateTheme() {
    currenttheme.value = listtheme.next()
  }
  const updateIsDark = (bool) => {
    isDark.value = bool
  }

  //provider

  app.provide('isDark', isDark)
  app.provide('currentTheme', currenttheme)
  app.provide('updateIsDark', updateIsDark)
  app.provide('updateTheme', updateTheme)
}

export default {
  install: function (Vue, option) {
    setupStorage(Vue, option)
  },
}
