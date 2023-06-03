<template>
  <div>
    <NavBar />
    <h1 class="page-title">
      Work <span class="emoji">🎭</span>
    </h1>
    <StatsSection />
    <WorkSection />
    <AknownledgementsSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WorkPage'
})
</script>
