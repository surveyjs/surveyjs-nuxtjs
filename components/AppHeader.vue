<script setup lang="ts">
const links = [
  { to: '/survey', label: 'Form Library' },
  { to: '/creator', label: 'Survey Creator' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/tabulator', label: 'Results Table' },
  { to: '/pdf-export', label: 'PDF Generator' },
]
</script>

<template>
  <header class="app-header">
    <NuxtLink to="/" class="brand">
      <img src="/favicon.ico" width="28" height="28" alt="" />
      SurveyJS + Nuxt
    </NuxtLink>
    <nav>
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
