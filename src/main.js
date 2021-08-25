import { createApp } from 'vue'
import Store from "./storage/GlobalStorge"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Prismjs from '@hotrungnhan/vue-prism-component'
import Axios from './api/ApiService'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './font/Font'
import './index.css'
import { setupI18n } from './i18n'

var i18n = setupI18n()
var app = createApp(App).use(i18n)
app.use(Store, { i18n: i18n })
app.use(i18n)
app.use(VueAxios, Axios)
app.use(Prismjs)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
