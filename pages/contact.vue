<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import ContactForm from '@/components/ContactForm.vue'
import AcknowledgementsSection from '@/components/AcknowledgementsSection.vue'

export default {
  name: 'ContactPage',
  components: { AcknowledgementsSection, ContactForm, NavBar },
  methods: {
    open (url: string) {
      window.open(url)
    }
  }
}
</script>
<template>
  <div>
    <NavBar />
    <h1 class="page-title less">
      Contact me <span class="emoji">📨</span>
    </h1>
    <h2 class="page-title less no-pd">
      <p style="color: var(--grey); font-size: .5em;">
        Contact me for any request, projects, issues... I'm available for little code missions.
      </p>
    </h2>
    <ContactForm />
    <hr>
    <AcknowledgementsSection />
  </div>
</template>

<style scoped>
hr {
  margin-top: 3em;
  width: 50%;
  background-color: var(--grey);
}
</style>
