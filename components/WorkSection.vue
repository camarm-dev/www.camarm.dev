<script setup>
import { ExternalLink } from 'lucide-vue-next'
</script>
<template>
  <section class="work">
    <div
      v-for="project in $data.projects"
      :key="project.name"
      class="drawer"
    >
      <header>
        <h2 class="title">
          {{ project.name }}
          <a :href="project.links[0].href" target="_blank">
            <ExternalLink />
          </a>
        </h2>
        <img v-if="project.icon" :alt="`${project.name} Icon`" :src="project.icon" class="icon" />
      </header>
      <p v-html="project.description.replaceAll('\n', '<br>')" />
      <div class="socials">
        <a
          v-for="link in project.links"
          :key="link.href"
          :class="link.class"
          :href="link.href"
          target="_blank"
        ><i :class="link.icon + ' fa-lg'" /></a>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '@/assets/data/projects.json'

export default defineComponent({
  name: 'WorkSection',
  data () {
    return projects
  }
})
</script>
