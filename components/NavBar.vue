<template>
  <div
    ref="navbar"
    class="nav"
  >
    <div class="item logo">
      <a href="/">
        <LogoLarge />
      </a>
    </div>
    <div class="items-stacked">
      <div class="item">
        <NuxtLink to="/">
          About
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/work">
          Work
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/blog">
          Blog
        </NuxtLink>
      </div>
      <div class="item">
        <a href="https://cv.camarm.fr" target="_blank">
          Resume <ExternalLink style="height: 20px; color: var(--grey); margin-bottom: -3px;"  />
        </a>
      </div>
    </div>
    <div
      class="burger"
      @click="expandNavbar()"
    >
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<script>
import LogoLarge from '@/components/LogoLarge.vue'
import {ExternalLink} from "lucide-vue-next";

export default defineComponent({
  name: 'NavBar',
  components: {ExternalLink, LogoLarge },
  methods: {
    expandNavbar () {
      this.$refs.navbar.classList.toggle('expanded')
    }
  }
})
</script>
