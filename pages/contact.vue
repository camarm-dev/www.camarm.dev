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
      <p style="color: var(--grey); font-size: .4em; padding-left: .2em;">
        Contact me for any request, projects, issues... I'm available for little code missions.
      </p>
    </h1>
    <ContactForm />
    <hr>
    <div class="socials">
      <button class="gl" @click="open('https://gitlab.com/camarm')">
        Gitlab&nbsp;<i class="fab fa-gitlab" />
      </button>
      <button class="gh" @click="open('https://github.com/camarm-dev')">
        Github&nbsp;<i class="fab fa-github" />
      </button>
      <button class="" @click="open('mailto:armand@camponovo.xyz')">
        Email&nbsp;<i class="fas fa-envelope" />
      </button>
      <button class="dt" @click="open('https://dev.to/camarm')">
        Dev.to&nbsp;<i class="fab fa-dev" />
      </button>
      <button class="ds" @click="open('https://discordapp.com/users/690581743425814548')">
        Discord&nbsp;<i class="fab fa-discord" />
      </button>
    </div>
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
