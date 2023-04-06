<template>
  <div class="article">
    <header>
      <img :src="articleData.cover_image" alt="Article Image">
      <h2 class="title"> {{ articleData.title }}</h2>
    </header>
    <div class="subtitle">
      <p class="description"><span class="tag" v-for="tag in articleData.tags">#{{ tag }}</span></p>
      <p class="date">{{ articleData.readable_publish_date }}</p>
    </div>
    <div class="content" v-html="articleData.body_html"></div>
    <footer class="socials">
      <a class="dev" :href="articleData.url" target="_blank"></a>
      <a class="likes" target="_blank">{{ articleData.positive_reactions_count }}&nbsp;<i class="fas fa-heart"></i></a>
      <a class="comments" target="_blank">{{ articleData.comments_count }}&nbsp;<i class="fas fa-comment-alt"></i></a>
    </footer>
  </div>
</template>

<script>



export default {
  name: "ReadArticle",
  props: ['articleData'],
}
</script>

<style scoped>

</style>
