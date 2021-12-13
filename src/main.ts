import { createApp } from 'vue'
// import Store from './storage/GlobalStorge'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Prismjs from '@hotrungnhan/vue-prism-component'
import Axios from './api/ApiService'
import App from './App.vue'
import './plugins/Font'
import './index.css'
import { setupI18n } from './plugins/i18n'
import VueAxios from 'vue-axios'
var i18n = setupI18n()
createApp(App).use(i18n)
  .use(VueAxios, Axios)
  .use(Prismjs)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')