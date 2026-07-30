<script setup lang="ts">
import DashboardTabulator from '~/components/DashboardTabulator.vue'
</script>

<template>
  <ClientOnly>
    <DashboardTabulator />
    <template #fallback>
      <p class="fallback">Loading Results Table…</p>
    </template>
  </ClientOnly>
</template>
