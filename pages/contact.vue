<template>
  <div>
    <NavBar />
    <h1 class="page-title">
      Contact me <span class="emoji">📨</span>
      <p style="color: var(--grey); font-size: .4em; padding-left: .2em;">Contact me for any request, projects, issues... I'm available for little code missions.</p>
    </h1>
    <ContactForm />
    <hr>
    <div class="socials">
      <button class="gl" @click="open('https://gitlab.com/camarm')">
        @camarm&nbsp;<i class="fab fa-gitlab" />
      </button>
      <button class="gh" @click="open('https://github.com/camarm-dev')">
        @camarm-dev&nbsp;<i class="fab fa-github" />
      </button>
      <button class="dt" @click="open('https://dev.to/camarm')">
        @camarm&nbsp;<i class="fab fa-dev" />
      </button>
      <button class="ds" @click="open('https://discordapp.com/users/690581743425814548')">
        camarm#4369&nbsp;<i class="fab fa-discord" />
      </button>
    </div>
    <AknownledgementsSection />
  </div>
</template>

<style scoped>
hr {
  margin-top: 3em;
  width: 50%;
  background-color: var(--grey);
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactPage',
  methods: {
    open (url: string) {
      window.open(url)
    }
  }
})
</script>
