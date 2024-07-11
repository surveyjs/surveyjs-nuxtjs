// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'survey-core/defaultV2.min.css',
    'survey-creator-core/survey-creator-core.min.css'
  ],
  plugins: ['~/plugins/surveyjs-form-builder.client.ts']
})
