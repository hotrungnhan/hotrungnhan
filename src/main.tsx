import i18next from 'i18next'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { initReactI18next } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import App from './App'
import './index.css'
import 'tw-elements/dist/js/index.min.js'
import { language } from './language'

i18next.use(initReactI18next).init({
  resources: language,
  lng: 'en',
  interpolation: { escapeValue: false }, // React already does escaping
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    ,
  </React.StrictMode>
)
