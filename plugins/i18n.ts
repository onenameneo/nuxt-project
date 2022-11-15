import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import tc from '../locales/tc.json';
import zh from '../locales/zh.json';

const lang = process.env?.NUXT_PUBLIC_LANG || 'en';

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: lang,
        messages: {
            en,
            tc,
            zh,
        },
    });

    vueApp.use(i18n);
});
