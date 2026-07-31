<script setup lang="ts">
import { Model } from 'survey-core'
import { SurveyComponent } from 'survey-vue3-ui'
import { json } from '~/data/survey_json.js'
import 'survey-core/survey-core.css'

const model = new Model(json)
</script>

<template>
  <SurveyComponent :model="model" />
</template>
