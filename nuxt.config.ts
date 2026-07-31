// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))

const surveyPackages = [
  'survey-core',
  'survey-vue3-ui',
  'survey-creator-core',
  'survey-creator-vue',
  'survey-analytics',
  'survey-pdf',
]

export default defineNuxtConfig({
  compatibilityDate: '2025-07-24',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: surveyPackages,
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^tabulator-tables$/,
          replacement: path.resolve(
            root,
            'node_modules/tabulator-tables/dist/js/tabulator.min.js',
          ),
        },
        {
          find: 'survey-vue3-ui',
          replacement: path.resolve(
            root,
            'node_modules/survey-vue3-ui/survey-vue3-ui.es.js',
          ),
        },
        {
          find: 'survey-creator-vue',
          replacement: path.resolve(
            root,
            'node_modules/survey-creator-vue/survey-creator-vue.es.js',
          ),
        },
      ],
    },
    ssr: {
      noExternal: surveyPackages,
    },
  },
  app: {
    head: {
      title: 'SurveyJS + Nuxt Quickstart Template',
      meta: [
        {
          name: 'description',
          content:
            'Quick start template for SurveyJS Form Library, Survey Creator, Dashboard, and PDF Generator in Nuxt',
        },
      ]
    },
  },
})
