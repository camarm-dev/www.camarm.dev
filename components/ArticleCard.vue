<template>
  <div class="article">
    <NuxtLink :to="'/blog/' + articleData.id">
      <header>
        <img :src="articleData.cover_image" alt="Article Image">
        <h2 class="title">
          {{ articleData.title }}
        </h2>
      </header>
    </NuxtLink>
    <div class="content">
      <p class="description">
        {{ articleData.description }}
      </p>
      <p class="date">
        {{ articleData.readable_publish_date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    articleData: JSON
  }
}
</script>

<style scoped>

</style>
