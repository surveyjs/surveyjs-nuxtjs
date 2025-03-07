# SurveyJS Form Builder + Nuxt Demo Example

This demo shows how to add [SurveyJS Form Builder / Survey Creator](https://surveyjs.io/survey-creator/documentation/overview) to a Nuxt application.

## Run the Application

```bash
git clone https://github.com/surveyjs/surveyjs-nuxtjs.git
cd surveyjs-nuxtjs
npm i
npm run dev
```

Open http://localhost:3000 in your web browser.

## How to add SurveyJS Form Builder to your Nuxt application 

1. Install the `survey-creator-vue` npm package:
   
    ```bash
    npm install survey-creator-vue --save
    ```

2. Create a file in the [`plugins`](./plugins/) directory and install SurveyJS Vue plugins in this file using the `nuxtApp.vueApp.use()` method.
3. Open the [`next.config.ts`](./nuxt.config.ts) file and do the following in it:
   1. List the plugin file in the `plugins` array.
   2. List SurveyJS style sheets in the `css` array.
4. Create a component and configure Survey Creator in it (see the [`components/SurveyCreator.vue`](./components/SurveyCreator.vue) file).
5. Add the component to a page (see the [`app.vue`](./app.vue) file). In this example, the component is wrapped in the `<ClientOnly>` tag because Survey Creator uses `localStorage` to save and restore survey JSON schemas. If your application doesn't use this functionality, you can render Survey Creator on the server.

## SurveyJS Resources

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/survey-creator/documentation/overview)
- [Starter Demos](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/reactjs)
- [What's New](https://surveyjs.io/stay-updated/major-updates/2023)