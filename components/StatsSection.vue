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
</template>

<script>

export default {
  name: 'StatsSection',
  data() {
    return {
      line_count: 0,
      commit_count: 0,
      repo_count: 0
    }
  },
  fetchOnServer: false,
  async fetch() {
    const url = 'http://localhost:8000' + '/statistics'
    const response = await fetch(url).then((res) => res.json())
    const stats = response['data']
    console.log(stats)
    this.line_count = stats.line_count
    this.commit_count = stats.commit_count
    this.repo_count = stats.repo_count
  }
}
</script>
