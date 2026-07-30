<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'
import { Model } from 'survey-core'
import { VisualizationPanel } from 'survey-analytics'
import { data, json } from '~/data/dashboard_data.js'
import 'survey-analytics/survey.analytics.css'

const panelEl = shallowRef<HTMLElement | null>(null)
let vizPanel: VisualizationPanel | null = null

onMounted(() => {
  const survey = new Model(json)
  vizPanel = new VisualizationPanel(survey.getAllQuestions(), data)
  if (panelEl.value) {
    vizPanel.render(panelEl.value)
  }
})

onBeforeUnmount(() => {
  vizPanel?.clear()
  vizPanel = null
})
</script>

<template>
  <div ref="panelEl" class="dashboard-wrap" />
</template>
