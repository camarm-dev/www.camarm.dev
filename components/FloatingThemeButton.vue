<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
</script>

<template>
  <button class="theme-switcher" @click="changeTheme()">
    <Sun v-if="theme == 'dark'" />
    <Moon v-else />
  </button>
</template>

<script lang="ts">

export default {
  data () {
    return {
      theme: 'dark'
    }
  },
  mounted () {
    this.theme = this.getTheme()
    this.start()
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
          break
      }
      const newTheme = this.getTheme()
      document.body.classList.add(newTheme)
      this.theme = newTheme
    },
    getTheme () {
      return localStorage.getItem('theme') || 'dark'
    },
    start () {
      document.body.classList.add(this.theme)
    }
  }
}
</script>

<style scoped>

</style>
