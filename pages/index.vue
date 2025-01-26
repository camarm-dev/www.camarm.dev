<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import NavBar from '@/components/NavBar.vue'
import LandingSection from '@/components/LandingSection.vue'
import WorkSection from "~/components/WorkSection.vue";
import FooterSection from "~/components/FooterSection.vue";
</script>

<template>
  <div id="root-component">
    <NavBar />
    <LandingSection />
    <AboutSection />
    <WorkSection />
    <FooterSection />
  </div>
</template>
