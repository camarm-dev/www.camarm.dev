<template>
  <section class="stats">
    <div class="stat">
      <h1>{{ line_count }}</h1>
      <p>Lines of code</p>
    </div>

    <div class="stat word">
      <h1>for</h1>
    </div>

    <div class="stat">
      <h1>{{ commit_count }}</h1>
      <p>Commits</p>
    </div>

    <div class="stat word">
      <h1>in</h1>
    </div>

    <div class="stat">
      <h1>{{ repo_count }}</h1>
      <p>Repositories</p>
    </div>
  </section>
  <section class="stats-mobile">
    <div class="drawer">
      <p>
        <span class="light">{{ line_count }}</span> lines of code for <span class="light">{{ commit_count }}</span> commits in <span class="light">{{ repo_count }}</span> repositories.
      </p>
    </div>
  </section>
</template>

<script>
export default defineComponent({
  name: 'StatsSection',
  data () {
    return {
      line_count: 0,
      commit_count: 0,
      repo_count: 0
    }
  },
  fetchOnServer: false,
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const url = 'https://api.camarm.fr/statistics'
      const response = await fetch(url).then(res => res.json())
      const stats = response.data
      this.line_count = stats.line_count
      this.commit_count = stats.commit_count
      this.repo_count = stats.repo_count
    }
  }
})
</script>
