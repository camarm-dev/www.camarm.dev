<template>
  <div>
    <NavBar />
    <LandingSection />
    <AboutSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    mainPage () {
      return this.$route.name
    }
  },
  watch: {
    mainPage: {
      immediate: false,
      handler () {
        startIntersectionObserver()
      }
    }
  }
})
</script>
