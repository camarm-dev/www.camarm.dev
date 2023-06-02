<template>
  <div>
    <NavBar />
    <h1 class="page-title">
      Contact me <span class="emoji">📨</span>
    </h1>
    <div class="socials">
      <button class="gl">@camarm&nbsp;<i class="fab fa-gitlab"></i></button>
      <button class="gh">@camarm-dev&nbsp;<i class="fab fa-github"></i></button>
      <button class="dt">@camarm&nbsp;<i class="fab fa-dev"></i></button>
    </div>
    <ContactForm />
    <AknownledgementsSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactPage'
})
</script>
