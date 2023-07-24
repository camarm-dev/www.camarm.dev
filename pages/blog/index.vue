<script lang="ts">
import NavBar from "~/components/NavBar.vue";
import ArticleCard from "~/components/ArticleCard.vue";
import AcknowledgementsSection from "~/components/AcknowledgementsSection.vue";

export default {
  name: 'BlogPage',
  components: {AcknowledgementsSection, ArticleCard, NavBar},
  data () {
    return {
      articles: []
    }
  },
  mounted() {
    this.fetchArticles()
  },
  methods: {
    async fetchArticles() {
      this.articles = await fetch('https://dev.to/api/articles?username=camarm').then(resp => resp.json())
    }
  }
}
</script>
<template>
  <div>
    <NavBar />
    <h1 class="page-title">
      Blog <span class="emoji">📝</span>
    </h1>
    <div class="articles">
      <ArticleCard
        v-for="article in $data.articles"
        :key="article.id"
        :article-data="article"
      />
    </div>
    <AcknowledgementsSection />
  </div>
</template>
