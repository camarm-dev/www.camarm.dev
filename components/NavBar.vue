<script setup>
import OutlinedLogo from '@/assets/images/icon_outline.png'
</script>
<template>
  <div
    ref="navbar"
    class="nav"
  >
    <div class="nav-content">
      <div class="item logo">
        <a href="/">
          <img :src="OutlinedLogo" alt="icon">
        </a>
      </div>
      <div class="items-stacked">
        <div
          class="burger"
          @click="expandNavbar()"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </div>
  <div class="nav-screen">
    Where the links should go
    <div class="item">
      <a href="https://cv.camarm.fr" target="_blank">
        Resume <ExternalLink style="height: 20px; color: var(--grey); margin-bottom: -3px;" />
      </a>
    </div>
    // TODO: project, about, contact
  </div>
</template>

<script>
import { ExternalLink } from 'lucide-vue-next'

export default defineComponent({
  name: 'NavBar',
  components: { ExternalLink, },
  methods: {
    expandNavbar () {
      this.$refs.navbar.classList.toggle('expanded')
    }
  }
})
</script>
