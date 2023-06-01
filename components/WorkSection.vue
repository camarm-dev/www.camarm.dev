<template>
  <section class="work">
    <div v-for="project in $data.projects" :key="project.name" :class="`card ${project.class}`">
      <header>
        <img :alt="project.name + ' Image'" :src="project.images.default" class="default">
        <img :alt="project.name + ' Image'" :src="project.images.alternative" class="alternative">
      </header>
      <h1>{{ project.name }}</h1>
      <div class="content" v-html="project.description.replaceAll('\n', '<br>')" />
      <div class="links">
        <a v-for="link in project.links" :key="link.href" :class="link.class" :href="link.href" target="_blank"><i :class="link.icon + ' fa-lg'" /></a>
      </div>
    </div>
  </section>
</template>

<script>
import projects from 'assets/data/projects.json'

export default {
  name: 'WorkSection',
  data () {
    return projects
  }
}
</script>
