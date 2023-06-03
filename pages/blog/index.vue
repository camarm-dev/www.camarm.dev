<template>
  <div>
    <NavBar />
    <h1 class="page-title">
      Blog <span class="emoji">📝</span>
    </h1>
    <div class="articles">
      <ArticleCard v-for="article in $data.articles" :key="article.id" :article-data="article" />
    </div>
    <AcknowledgementsSection />
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
