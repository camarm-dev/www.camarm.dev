<template>
  <div>
    <NavBar />
    <div class="reading">
      <ReadArticle :article-data="article" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'axios'

export default Vue.extend({
  name: 'ReadArticlePage',
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    this.fetchArticle()
  },
  methods: {
    async fetchArticle () {
      this.article = await fetch(`https://dev.to/api/articles/${this.$route.params.id}`).then(resp => resp.json())
    }
  }
})
</script>
