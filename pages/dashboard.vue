<script setup lang="ts">
import DashboardPanel from '~/components/DashboardPanel.vue'
</script>

<template>
  <!-- Analytics touches document at module load -->
  <ClientOnly>
    <DashboardPanel />
    <template #fallback>
      <p class="fallback">Loading Dashboard…</p>
    </template>
  </ClientOnly>
</template>
