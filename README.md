# SurveyJS + Nuxt Quickstart Template

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template uses [Nuxt](https://nuxt.com/) and the following SurveyJS components:

- [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/overview)
- [SurveyJS PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview)
- [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview)

> This template uses SurveyJS **v3** (`3.0.0-beta.8`).
>
> Form Library and PDF Generator are server-rendered. Survey Creator and Dashboard use `ClientOnly` because they access browser APIs (`navigator` / `document`) during setup.

## Run the application

```bash
git clone https://github.com/surveyjs/surveyjs-nuxt.git
cd surveyjs-nuxt
npm i
npm run dev
```

Open http://localhost:3000/ in your web browser.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [data/survey_json.js](data/survey_json.js)
  - [components/SurveyForm.vue](components/SurveyForm.vue)
- Add Survey Creator to a page
  - [components/SurveyCreator.vue](components/SurveyCreator.vue)
- Export a survey to a PDF document
  - [pages/pdf-export.vue](pages/pdf-export.vue)
- Visualize survey results
  - As charts
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [components/DashboardPanel.vue](components/DashboardPanel.vue)
  - As a table
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [components/DashboardTabulator.vue](components/DashboardTabulator.vue)
