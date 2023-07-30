<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import NavBar from '@/components/NavBar.vue'
import LandingSection from '@/components/LandingSection.vue'
import AcknowledgementsSection from '@/components/AcknowledgementsSection.vue'
</script>

<template>
  <div id="root-component">
    <NavBar />
    <LandingSection />
    <AboutSection />
    <div
      align="center"
      style="margin-bottom: 20em;"
    >
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
