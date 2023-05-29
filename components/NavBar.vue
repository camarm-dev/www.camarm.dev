<template>
  <div class="nav">
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
    <div class="burger" v-expand>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.directive('expand', {
  inserted: (el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault()
      el.parentElement.classList.toggle("expanded")
    });
  }
})

export default {
  name: 'NavBar'
}
</script>
