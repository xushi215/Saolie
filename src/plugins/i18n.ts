import { App } from 'vue'
import { createI18n, VueMessageType } from 'vue-i18n'
import { LocaleMessages } from '@intlify/core-base'

/**
 * 加载所有本地化信息
 */
function loadLocaleMessages () {
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.ya?ml$/i)
  const messages: LocaleMessages<VueMessageType> = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

/**
 * 获取默认语言
 */
function getDefaultLocale () {
  const languages = navigator.languages || [navigator.language]
  for (const language of languages) {
    if (/^zh(?:-CN)?$/i.test(language)) {
      // 简体中文，包括 zh 和 zh-CN
      return 'zh-Hans'
    } else if (/^zh\b/i.test(language)) {
      // 除简体中文外的所有中文默认使用繁体中文
      return 'zh-Hant'
    } else if (/^en\b/i.test(language)) {
      // 英语
      return 'en'
    } else if (/^de\b/i.test(language)) {
      // german
      return 'de'
    }
  }
  // 默认使用英语
  return 'en'
}

/**
 * 配置 Vue I18n，开发工具参见：https://kazupon.github.io/vue-i18n/guide/tooling.html
 */
export const i18n = createI18n({
  // 基础配置，https://vue-i18n.intlify.dev/ja/guide/advanced/composition.html#basic-usage
  fallbackLocale: 'en',
  locale: getDefaultLocale(),
  messages: loadLocaleMessages()
})

export default (app: App<Element>): void => {
  app.use(i18n)
}
