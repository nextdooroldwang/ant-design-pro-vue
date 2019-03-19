import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
import jaLocale from './ja'
import { LANG } from '@/store/mutation-types'
import { getStore } from '@/utils/storage'
Vue.use(VueI18n)

const messages = {
  en: enLocale,
  zh: zhLocale,
  ja: jaLocale
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: getStore(LANG) || 'en',
  // set locale messages
  messages
})
export default i18n
