<template>
  <section class="work">

    <div class="card" v-for="project in $data.projects">
      <header>
        <img :alt="project.name + ' Image'" :src="project.images.default" class="default">
        <img :alt="project.name + ' Image'" :src="project.images.alternative" class="alternative">
      </header>
      <h1>{{ project.name }}</h1>
      <div class="content" v-html="project.description.replaceAll('\n', '<br>')"></div>
      <div class="links">
        <a :class="link.class" :href="link.href" target="_blank" v-for="link in project.links"><i :class="link.icon + ' fa-lg'"></i></a>
      </div>
    </div>

  </section>
</template>

<script>
import projects from 'assets/data/projects.json'

export default {
  name: 'WorkSection',
  data() {
    return projects
  }
}
</script>
