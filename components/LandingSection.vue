<template>
  <div class="landing">
    <div class="content">
      <div class="image">
        <img src="" alt="Armand / camarm">
      </div>
      <h1>Hey <span class="hand"><span class="waving">👋</span></span>,</h1>
      <h1>
        I'm
        <span class="name">
          <span>camarm</span>
          <span>Armand</span>
          <span>camarm</span>
        </span>
      </h1>
      <p>A french 15 yo junior developer !</p>
    </div>
    <div class="scroll">
      <div class="arrow-container">
        <div class="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: 'LandingSection',
  created() {
    this.loadJS()
  },
  methods: {
    loadJS: () => { import('assets/js/landing') }
  }
})
</script>
