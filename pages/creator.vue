<script setup lang="ts">
import SurveyCreator from '~/components/SurveyCreator.vue'
</script>

<template>
  <!-- Creator touches navigator/document during construction -->
  <ClientOnly>
    <SurveyCreator />
    <template #fallback>
      <p class="fallback">Loading Survey Creator…</p>
    </template>
  </ClientOnly>
</template>
