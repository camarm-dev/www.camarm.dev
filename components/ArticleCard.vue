<template>
  <NuxtLink :to="'/blog/' + articleData.id">
    <div class="drawer has-cover-image">
      <img
        :src="articleData.cover_image"
        alt="Article Image"
      >
      <h2 class="title">
        {{ articleData.title }}
      </h2>
      <p>
        {{ articleData.description }}
        <br>
        <span class="light">{{ articleData.readable_publish_date }}</span>
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default defineComponent({
  name: 'ArticleCard',
  props: {
    articleData: JSON
  }
})
</script>

<style scoped>

</style>
