<template>
  <div id="surveyCreator">
    <ClientOnly fallback-tag="div" fallback="Loading Survey Creator...">
      <SurveyCreator />
    </ClientOnly>
  </div>
</template>

<style>
#surveyCreator {
  height: 100vh;
  width: 100vw;
}

body {
  margin: 0;
}
</style>
