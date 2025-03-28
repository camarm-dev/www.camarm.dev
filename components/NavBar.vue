<script setup>
import OutlinedLogo from '@/assets/images/icon_outline.png'
</script>
<template>
  <div
    ref="navbar"
    class="nav"
  >
    <div class="nav-start"></div>
    <div class="nav-content">
      <div class="logo">
        <a href="/">
          <img :src="OutlinedLogo" alt="icon">
        </a>
      </div>
    </div>
    <div class="nav-end"></div>
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
