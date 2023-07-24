<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import StatsSection from '~/components/StatsSection.vue'
import WorkSection from '~/components/WorkSection.vue'
import AcknowledgementsSection from '~/components/AcknowledgementsSection.vue'
</script>
<template>
  <div>
    <NavBar />
    <h1 class="page-title">
      Work <span class="emoji">☕</span>
    </h1>
    <StatsSection />
    <WorkSection />
    <AcknowledgementsSection />
  </div>
</template>
