// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'survey-core/survey-core.min.css',
    'survey-creator-core/survey-creator-core.min.css'
  ],
  plugins: ['~/plugins/surveyjs-form-builder.client.ts']
})
