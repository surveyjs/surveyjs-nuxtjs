<template>
  <div id="surveyCreator"></div>
</template>

<script>
import { SurveyCreator } from "survey-creator-knockout";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

import { Serializer } from "survey-core";

Serializer.addProperty("question", "tag:number");

export default {
  name: "survey-creator",
  data() {
    return {};
  },
  mounted() {
    const creatorOptions = {
      showLogicTab: true,
      isAutoSave: true
    };
    const creator = new SurveyCreator(creatorOptions);

    creator.saveSurveyFunc = function() {
      console.log(JSON.stringify(this.text));
    };
    creator.render("surveyCreator");
  }
  
};
</script>

<style scoped>
#surveyCreator {
  height: 100vh;
  width: 100vw;
}
</style>
