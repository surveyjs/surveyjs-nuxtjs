<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'
import { Model } from 'survey-core'
import { Dashboard } from 'survey-analytics'
import { data, json } from '~/data/dashboard_data.js'
import 'survey-analytics/survey.analytics.css'

const dashboardEl = shallowRef<HTMLElement | null>(null)
let dashboard: Dashboard | null = null

onMounted(() => {
  const survey = new Model(json)
  dashboard = new Dashboard({
    questions: survey.getAllQuestions(),
    data: data
  })
  if (dashboardEl.value) {
    dashboard.render(dashboardEl.value)
  }
})

onBeforeUnmount(() => {
  dashboard?.clear()
  dashboard = null
})
</script>

<template>
  <div ref="dashboardEl" class="dashboard-wrap" />
</template>
