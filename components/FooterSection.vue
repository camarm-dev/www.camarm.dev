<template>
  <footer class="acknowledgements">
    <div class="right">
      <IncorporationLogo />
      <p>www.camarm.dev with <i class="fas fa-heart" /> by @camarm for CAMARM Inc.</p>
    </div>
    <div class="sections">
      <div>
        <p>Socials</p>
        <a
          href="https://github.com/camarm-dev"
          target="_blank"
        >Github</a>
        <a
          href="https://cv.camarm.fr"
          target="_blank"
        >Resume</a>
        <a
          href="https://dev.to/camarm"
          target="_blank"
        >Dev</a>
        <a
          href="mailto:contact@camarm.dev"
          target="_blank"
        >Email</a>
        <a href="https://ko-fi.com/Q5Q8SPYLE" target="_blank">
          <img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Support me on Ko-Fi">
        </a>
      </div>
      <div>
        <p>Services</p>
        <a
          href="https://uptime.camarm.fr"
          target="_blank"
        >Network status</a>
        <a
          href="https://api.camarm.fr/login"
          target="_blank"
        >Customer Panel</a>
      </div>
      <div>
        <p>Legal</p>
        <a
          href="https://raw.githubusercontent.com/camarm-dev/www.camarm.dev/master/LICENSE"
          target="_blank"
        >Code license</a>
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/3.0/fr/"
          target="_blank"
        >Images, texts & brand license</a>
        <a
          href="/legal"
          target="_blank"
        >Legal notice</a>
      </div>
    </div>
  </footer>
</template>

<script>
import IncorporationLogo from '~/components/IncorporationLogo.vue'

export default defineComponent({
  name: 'FooterSection',
  components: { IncorporationLogo }
})
</script>
