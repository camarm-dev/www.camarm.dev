<template>
  <MainPage />
</template>

<script lang="ts">
import Vue from 'vue'
import MainPage from "~/pages/main.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {MainPage}
})
</script>
