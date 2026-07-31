<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'
import { Model } from 'survey-core'
import { Tabulator } from 'survey-analytics/survey.analytics.tabulator'
import jsPDF from 'jspdf'
import { applyPlugin } from 'jspdf-autotable'
import { data, json } from '~/data/dashboard_data.js'
import 'survey-analytics/survey.analytics.tabulator.css'
import 'tabulator-tables/dist/css/tabulator.css'

applyPlugin(jsPDF)

const summaryEl = shallowRef<HTMLElement | null>(null)

onMounted(() => {
  const survey = new Model(json)
  const tableView = new Tabulator(survey, data, {
    jspdf: jsPDF,
  })
  if (summaryEl.value) {
    tableView.render(summaryEl.value)
  }
})
</script>

<template>
  <div ref="summaryEl" class="tabulator-wrap" />
</template>
