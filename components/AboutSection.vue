<script setup lang="ts">
import { Github, Gitlab, Mail, Phone, Coffee, ArrowUpRight } from 'lucide-vue-next'
import TypescriptIcon from '@/assets/icons/ts.png'
import MongoIcon from '@/assets/icons/mongo.png'
import PythonIcon from '@/assets/icons/python.png'
import RubyIcon from '@/assets/icons/ruby.png'
import IonicIcon from '@/assets/icons/ionic.png'
import VueIcon from '@/assets/icons/vue.png'
import FlaskIcon from '@/assets/icons/flask.png'
import FastAPIIcon from '@/assets/icons/fastapi.png'
import CouchIcon from '@/assets/icons/couch.png'
import SqliteIcon from '@/assets/icons/sqlite.png'
import PVEIcon from '@/assets/icons/pve.png'
import LinuxIcon from '@/assets/icons/linux.png'
</script>
<template>
  <section class="about mt">
    <div class="col half">
      <div class="content">
        <div class="sectionTitle">
          <p>About me</p>
          <span></span>
        </div>
        <h2 class="title heading">
          Passionated developer, with
          unlimited <span class="blue">power</span>
        </h2>
        <p>
          I'm a passionated 16 yo developer. I love computers and started development at age of 12.
          I'm interested in open source, and I'm an everyday Linux user.
        </p>
        <p>
          I'm available to work with you
        </p>
      </div>
    </div>
    <div class="col half">
      <figure class="image pl">
        <img src="https://images.unsplash.com/photo-1668681919287-7367677cdc4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gradient">
        <figcaption>Image by Pawel Czerwinski on Unsplash</figcaption>
      </figure>
    </div>
    <div class="col third">
      <div class="content drawer outlined" draggable="true">
        <h2 class="title">Objectives</h2>
        <p>
          Fond of servers administration and development, I really enjoy making these on my free
          time and absolutely want to make them my job.
          I am currently in high school, in première class with Maths, NSI (IT) and Physics specialties.
          My goal is to enter an engineering school, to become software engineer.
        </p>
      </div>
    </div>
    <div class="col thirds">
      <div class="content drawer" draggable="true">
        <h2 class="title">Experience</h2>
        <div class="grid">
          <div class="xp">
            <p class="head">
              <span class="number">4</span>
              <span class="unit"> years</span>
            </p>
            <p class="desc">Developing applications</p>
          </div>
          <div class="xp">
            <p class="head">
              <span class="number">3</span>
              <span class="unit"> years</span>
            </p>
            <p class="desc">Managing my own infrastructure</p>
          </div>
          <div class="xp">
            <p class="head">
              <span class="unit">+ </span>
              <span class="number">5500</span>
            </p>
            <p class="desc">Git commits</p>
          </div>
          <div class="xp">
            <p class="head">
              <span class="unit">+ </span>
              <span class="number">20</span>
            </p>
            <p class="desc">Webapp created</p>
          </div>
          <div class="xp">
            <p class="head">
              <span class="unit">+ </span>
              <span class="number">15</span>
            </p>
            <p class="desc">Services self-hosted</p>
          </div>
          <div class="xp">
            <p class="head">
              <span class="unit">+ </span>
              <span class="number">3.1</span>
              <span class="unit">M</span>
            </p>
            <p class="desc">Lines of code written</p>
          </div>
          <div class="xp">
            <p class="head">
              <span class="unit">+ </span>
              <span class="number">250</span>
            </p>
            <p class="desc">Github issues resolved</p>
          </div>
          <div class="xp">
            <p class="head">
              <span class="unit">+ </span>
              <span class="number">50</span>
            </p>
            <p class="desc">Pull requests merged</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col third">
      <figure class="image">
        <img src="https://images.unsplash.com/photo-1659469377768-4f42f2f091c5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gradient">
        <figcaption>Image by Pawel Czerwinski on Unsplash</figcaption>
      </figure>
    </div>
    <div class="col thirds">
      <div class="content">
        <div class="sectionTitle">
          <p>Engagements</p>
          <span></span>
        </div>
        <h2 class="title heading">
          I'm an Open Source enthusiast and
          I believe in an <span class="pink">ethical</span> Internet.
        </h2>
        <p>
          I'm always trying to use open source and privacy respectives tools (FOSS).
          That’s why I host alternatives to GAFAM's services on my own server at home.
          <br>
          I can't stand data privacy violation made particularly by the GAFAM.
          That's why I support open source and open projects !
          <br>
          <br>
          That's why I created <a href="https://labse.camarm.fr" target="_blank">Labse Studio</a> in 2021 :
          a non profit organization which powers various open source projects around Internet. My goal is to
          offer hosting, development or deployment services to small FOSS.
        </p>
        <h2 class="title">My open source contributions</h2>
        <div class="grid gap">
          <div class="drawer media outlined" draggable="true">
            <a class="open" href="https://papillon.bzh" target="_blank"><ArrowUpRight/></a>
            <img src="https://vincelinise.com/assets/papillon-banner.jpg" alt="Papillon, open source school client">
          </div>
          <div class="drawer media outlined" draggable="true">
            <a class="open" href="https://github.com/literateInk/pawnote" target="_blank"><ArrowUpRight/></a>
            <img src="https://repository-images.githubusercontent.com/734874385/e1ca8f8e-ec28-456b-ac06-46f845f8364d" alt="Pawnote, API wrapper for Pronote">
          </div>
          <div class="drawer media outlined" draggable="true">
            <a class="open" href="https://github.com/EduWireApps/ecoledirecte-api-docs/" target="_blank"><ArrowUpRight/></a>
            <img src="https://opengraph.githubassets.com/9dae490696257d07dbb5320d90c27d536e9f2436a4ff8557fdd142019e56316f/EduWireApps/ecoledirecte-api-docs" alt="Documentation for Ecoledirecte API">
          </div>
        </div>
        <br>
        <p>Discover more open source projects I contributed to on <a href="https://github.com/camarm-dev" target="_blank">my Github</a>.</p>
      </div>
    </div>
    <div class="col half">
      <div class="content">
        <div class="sectionTitle">
          <p>Technologies</p>
          <span></span>
        </div>
        <h2 class="title heading">
          From frontend to backend,
          administration to creation,
          I'm a <span class="purple">fullstack</span> developer !
        </h2>
        <p>
          With my 4 years experience creating various applications, I know how to structure, develop, deploy and scale software.
          I'm
        </p>
      </div>
    </div>
    <div class="col half">
      <div class="content drawer outlined">
        <h2 class="title">Technologies I'm familiar with</h2>
        <div class="techno-jail">
          <div class="techno">
            <a class="open" href="https://www.typescriptlang.org/" target="_blank"><ArrowUpRight/></a>
            <img :src="TypescriptIcon" alt="Typescript icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://www.mongodb.com" target="_blank"><ArrowUpRight/></a>
            <img :src="MongoIcon" alt="MongoDB icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://python.org" target="_blank"><ArrowUpRight/></a>
            <img :src="PythonIcon" alt="Python icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://www.ruby-lang.org" target="_blank"><ArrowUpRight/></a>
            <img :src="RubyIcon" alt="Ruby icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://vuejs.org/" target="_blank"><ArrowUpRight/></a>
            <img :src="VueIcon" alt="Vue icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://ionicframework.com" target="_blank"><ArrowUpRight/></a>
            <img :src="IonicIcon" alt="Ionic icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://flask.palletsprojects.com/" target="_blank"><ArrowUpRight/></a>
            <img :src="FlaskIcon" alt="Flask icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://fastapi.tiangolo.com" target="_blank"><ArrowUpRight/></a>
            <img :src="FastAPIIcon" alt="FastAPi icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://docs.couchdb.org/en/stable/" target="_blank"><ArrowUpRight/></a>
            <img :src="CouchIcon" alt="couchDB icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://sqlite.org" target="_blank"><ArrowUpRight/></a>
            <img :src="SqliteIcon" alt="Sqlite icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://www.proxmox.com/en/" target="_blank"><ArrowUpRight/></a>
            <img :src="PVEIcon" alt="Proxmox icon" class="icon">
          </div>
          <div class="techno">
            <a class="open" href="https://www.linux.org/pages/download/" target="_blank"><ArrowUpRight/></a>
            <img :src="LinuxIcon" alt="Linux icon" class="icon">
          </div>
        </div>
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
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import startListeningDragDrop from '@/scripts/drag'
import startTechnosFall from '@/scripts/technosfalling'

export default defineComponent({
  name: 'AboutSection',
  mounted() {
    document.querySelectorAll('.xp').forEach(el => {
      const numberElement = el.querySelector('.number')
      if (numberElement) {
        el?.addEventListener('mouseenter', () => this.animateNumber(numberElement))
      }
    })
    startListeningDragDrop()
    startTechnosFall()
  },
  methods: {
    animateNumber(element: Element) {
      if (element.classList.contains('animated')) return
      element.classList.add('animated')
      const number = Number(element.innerHTML)
      const increaseNumber = (i: number) => {
        i++
        element.innerHTML = i.toString()
        if (i + 1 >= number) {
          setTimeout(() => element.innerHTML = number.toString(), 500 / number)
          element.classList.remove('animated')
          return
        }
        if (number < 1000) {
          setTimeout(() => increaseNumber(i), 500 / number)
        } else {
          setTimeout(() => increaseNumber(i + 50), 500 / number)
        }
      }
      increaseNumber(0)
    }
  }
})
</script>
