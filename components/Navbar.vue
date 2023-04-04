<!-- Please remove this file from your project -->
<template>
  <div class="nav">
    <div class="item logo">
      <a href="/">
        <Logo/>
      </a>
    </div>
    <div class="items-stacked">
      <div class="item">
        <a href="/">About</a>
      </div>
      <div class="item">
        <a href="/work">Work</a>
      </div>
      <div class="item">
        <a href="/blog">Blog</a>
      </div>
      <div class="item">
        <a href="/#contact">Contact</a>
      </div>
      <div class="item square gh">
        <a href="https://github.com/camarm-dev" target="_blank"><i class="fab fa-github"></i></a>
      </div>
      <div class="item square gl">
        <a href="https://gitlab.com/camarm" target="_blank"><i class="fab fa-gitlab"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
