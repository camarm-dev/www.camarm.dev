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
        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
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

export default defineComponent({
  name: 'NavBar',
  components: { LogoLarge },
  methods: {
    expandNavbar () {
      this.$refs.navbar.classList.toggle('expanded')
    }
  }
})
</script>
