<script setup lang="ts">
import { shallowRef } from 'vue'
import type { ICreatorOptions } from 'survey-creator-core'
import { registerCreatorTheme, SurveyCreatorModel } from 'survey-creator-core'
import SurveyTheme from 'survey-core/themes'
import { SurveyCreatorComponent } from 'survey-creator-vue'
import { json as defaultJson } from '~/data/survey_json.js'
import 'survey-core/survey-core.min.css'
import 'survey-creator-core/survey-creator-core.min.css'
import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/ext-searchbox'

registerCreatorTheme(SurveyTheme)

const props = defineProps<{
  json?: object
  options?: ICreatorOptions
}>()

const defaultCreatorOptions: ICreatorOptions = {
  showTranslationTab: true,
}

const creator = shallowRef(
  (() => {
    const model = new SurveyCreatorModel(props.options || defaultCreatorOptions)
    model.JSON = props.json || defaultJson
    model.saveSurveyFunc = (no: number, callback: (num: number, status: boolean) => void) => {
      console.log(JSON.stringify(model.JSON))
      callback(no, true)
    }
    return model
  })(),
)
</script>

<template>
  <div class="creator-wrap">
    <SurveyCreatorComponent :model="creator" />
  </div>
</template>
