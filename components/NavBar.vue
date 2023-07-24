<template>
  <div ref="navbar" class="nav">
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
      <div class="item square gh">
        <a href="https://github.com/camarm-dev" target="_blank"><i class="fab fa-github" /></a>
      </div>
      <div class="item square gl">
        <a href="https://gitlab.com/camarm" target="_blank"><i class="fab fa-gitlab" /></a>
      </div>
      <div class="item square ml">
        <a href="mailto:armand@camponovo.xyz" target="_blank"><i class="fas fa-envelope" /></a>
      </div>
    </div>
    <div @click="expandNavbar()" class="burger">
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: 'NavBar',
  methods: {
    expandNavbar() {
      this.$refs.navbar.classList.toggle('expanded')
    }
  }
})
</script>
