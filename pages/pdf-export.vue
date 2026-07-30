<script setup lang="ts">
import { Model } from 'survey-core'
import { SurveyPDF } from 'survey-pdf'
import { json } from '~/data/survey_json.js'

const model = new Model(json)

function savePDF() {
  const surveyPDF = new SurveyPDF(json)
  surveyPDF.data = model.data
  surveyPDF.save()
}
</script>

<template>
  <div class="page-intro">
    <h1>SurveyJS PDF Generator</h1>
    <p>
      SurveyJS PDF Generator is a client-side extension over SurveyJS Form
      Library that enables users to save surveys as PDF documents.
    </p>
    <p>
      NOTE: Dynamic elements and characteristics (visibility, validation,
      navigation buttons) are not supported.
    </p>
    <p>Click the button below to export survey to a PDF document.</p>
    <button type="button" class="pdf-btn" @click="savePDF">Save as PDF</button>
  </div>
</template>
