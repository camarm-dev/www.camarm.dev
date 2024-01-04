<script setup>
import { Github, Gitlab, Mail, Phone, Coffee } from 'lucide-vue-next'
import DevIcon from '~/components/DevIcon.vue'
</script>
<script>
export default defineComponent({
  name: 'AboutSection'
})
</script>
<template>
  <section class="about mt">
    <div class="col left half">
      <div class="content drawer">
        <h2 class="title">
          Welcome ! 👨‍💻
        </h2>
        <p>
          Welcome on my website !
          I’m a french 15 years old junior developer and growing sysadmin passionated of Linux, servers infrastructures
          and open source.
        </p>
      </div>

      <div class="media drawer">
        <img src="../assets/images/illustrations/gradient1.png" alt="Gradient">
      </div>

      <div class="content drawer">
        <h2 class="title">
          My engagements 👊
        </h2>
        <p>
          I'm always trying to use open source and privacy respectives tools. That’s why I host alternatives to GAFAM's
          services on my server.
          I use Linux (Ubuntu) 90% of the time to code and work and only use windows to play games. Linux is today a
          good alternative to windows, it’s free, open source and powerful !
          I can't stand data privacy violation made particularly by the GAFAM. That's why I support open source and open
          projects !
        </p>
      </div>

      <div class="media drawer">
        <img src="../assets/images/illustrations/gradient3.png" alt="Gradient">
      </div>

      <div class="content drawer">
        <h2 class="title">
          Experiences 🔮
        </h2>
        <p>
          + 20 projects<br>
          + 3.1 millions lines of code<br>
          + 4000 github commits<br>
          + 200 issues resolved<br>
          + 50 PR merged<br><br>
          + 10 self-hosted services online<br>
          + 15 web-applications online<br><br>
          + 3 years developing applications<br>
          + 2 years managing my own infrastructure<br>
        </p>
      </div>
    </div>

    <div class="col right half">
      <div class="media drawer">
        <img src="../assets/images/illustrations/gradient.png" alt="Gradient">
      </div>

      <div class="content drawer">
        <h2 class="title">
          My objectives 🗒️
        </h2>
        <p>
          I wanna use and administrate servers but also code in my future job. I really enjoy making these on my free
          time and absolutely want to make them my job.<br>
          Actually in tenth grade, I want to make an informatics BUT after the high school. I’m also hyped to study at
          school 42. I think the devops job is a good option to balance between servers and code.
        </p>
      </div>

      <div class="media drawer">
        <img src="../assets/images/illustrations/gradient2.png" alt="Gradient">
      </div>

      <div class="content drawer">
        <h2 class="title">
          Skills 💾
        </h2>
        <p>
          <b>Languages</b><br>
          <span class="tags">
            <span>Typescript</span>
            <span>Python</span>
            <span>Ruby</span>
          </span><br>
          <b>Frameworks</b><br>
          <span class="tags">
            <span>Vue</span>
            <span>Ionic</span>
            <span>Flask</span>
            <span>FastApi</span>
          </span><br>
          <b>Databases</b><br>
          <span class="tags">
            <span>MongoDB</span>
            <span>CouchDB</span>
            <span>Sqlite</span>
          </span><br>
          <b>OS</b><br>
          <span class="tags">
            <span>Proxmox</span>
            <span>Linux</span>
          </span><br>
          You can check <NuxtLink to="/work">
            my projects
          </NuxtLink> to see me in action.
        </p>
      </div>

      <div class="media drawer">
        <img src="../assets/images/illustrations/gradient4.png" alt="Gradient">
      </div>
    </div>
  </section>
  <section class="about">
    <div class="drawer" style="width: 100%; margin-top: 1em; margin-bottom: 1em;">
      <h2 class="title">
        Contact me 👥
      </h2>
      <p>
        You can reach me at <a href="mailto:contact@camarm.dev">contact@camarm.dev</a> to contact me. Please prefer use <a href="mailto:software@camarm.dev">software@camarm.dev</a> to contact me about software I develop.
      </p>
      <div class="socials">
        <a href="https://github.com/camarm-dev" target="_blank"><Github /></a>
        <a href="https://gitlab.com/camarm" target="_blank"><Gitlab /></a>
        <a href="mailto:contact@camarm.dev"><Mail /></a>
        <a href="tel:+33766760191"><Phone /></a>
        <a href="https://ko-fi.com/camarm" target="_blank"><Coffee /></a>
        <a href="https://dev.to/camarm" target="_blank"><DevIcon /></a>
      </div>
    </div>
  </section>
</template>
