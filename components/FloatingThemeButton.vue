<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
</script>

<template>
<button @click="changeTheme()" class="theme-switcher">
  <Sun v-if="theme == 'dark'"/>
  <Moon v-else/>
</button>
</template>

<script lang="ts">

export default {
  data () {
    return {
      theme: 'dark'
    }
  },
  mounted() {
    this.theme = this.getTheme()
  },
  methods: {
    changeTheme () {
      const currentTheme = this.getTheme()
      document.body.classList.remove(currentTheme)
      switch (currentTheme) {
        case 'dark':
          localStorage.setItem('theme', 'light')
          break
        default:
          localStorage.setItem('theme', 'dark')
      }
      const newTheme = this.getTheme()
      document.body.classList.add(newTheme)
      this.theme = newTheme
    },
    getTheme () {
      return localStorage.getItem('theme') || 'dark'
    }
  }
}
</script>

<style scoped>

</style>
