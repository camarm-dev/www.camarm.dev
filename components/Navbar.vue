<template>
  <div class="nav">
    <div class="item logo">
      <a href="/">
        <Logo />
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
        <a href="/#contact">Contact</a>
      </div>
      <div class="item square gh">
        <a href="https://github.com/camarm-dev" target="_blank"><i class="fab fa-github" /></a>
      </div>
      <div class="item square gl">
        <a href="https://gitlab.com/camarm" target="_blank"><i class="fab fa-gitlab" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
