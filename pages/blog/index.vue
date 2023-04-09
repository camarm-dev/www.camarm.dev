<template>
  <div>
    <Navbar />
    <h1 class="page-title">
      Articles
    </h1>
    <div class="articles">
      <Article v-for="article in $data.articles" :key="article.id" :article-data="article" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'axios'

export default Vue.extend({
  name: 'BlogPage',
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.fetchArticles()
  },
  methods: {
    async fetchArticles () {
      this.articles = await fetch('https://dev.to/api/articles?username=camarm').then(resp => resp.json())
    }
  }
})
</script>
