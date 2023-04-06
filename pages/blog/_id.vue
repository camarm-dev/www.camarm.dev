<template>
  <div>
    <Navbar />
    <div class="reading">
      <ReadArticle :articleData="article"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'axios'

export default Vue.extend({
  name: 'ReadArticlePage',
  methods: {
    async fetchArticle() {
      this.article = await fetch(`https://dev.to/api/articles/${this.$route.params.id}`).then(resp => resp.json())
    }
  },
  mounted() {
    this.fetchArticle()
  },
  data() {
    return {
      article: {}
    }
  }
})
</script>
