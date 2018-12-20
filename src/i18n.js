import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'ko',
    fallbackLocale: 'en',
    messages: {
        ko: require('@/assets/locales/ko.json'),
        en: require('@/assets/locales/en.json'),
        ja: require('@/assets/locales/ja.json'),
        vi: require('@/assets/locales/vi.json'),
        zh_cn: require('@/assets/locales/zh-CN.json')
    }
});

export default i18n;