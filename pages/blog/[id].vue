<script lang="ts">
import {useRoute} from "nuxt/app";
import NavBar from "~/components/NavBar.vue";
import ReadArticle from "~/components/ReadArticle.vue";

export default {
  name: 'ReadArticlePage',
  components: {ReadArticle, NavBar},
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
      const route = useRoute()
      this.article = await fetch(`https://dev.to/api/articles/${route.params.id}`).then(resp => resp.json())
    }
  }
}
</script>
<template>
  <div>
    <NavBar />
    <div class="reading">
      <ReadArticle :article-data="article" />
    </div>
  </div>
</template>
