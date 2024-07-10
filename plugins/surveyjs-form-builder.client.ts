import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp
    .vueApp
    .use(surveyPlugin)
    .use(surveyCreatorPlugin)
})