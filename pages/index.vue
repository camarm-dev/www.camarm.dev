<template>
  <div>
    <NavBar />
    <LandingSection />
    <AboutSection />
    <div align="center" style="margin-bottom: 20em;">
      <h2>
        Discover my
        <NuxtLink to="/work">
          work
        </NuxtLink>
        .
      </h2>
    </div>
    <AcknowledgementsSection />
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
