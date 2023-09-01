<script>
export default defineComponent({
  name: 'AboutSection'
})
</script>
<template>
  <section class="about">
    <article>
      <div class="content">
        <h2>Welcome !</h2>
        <p>
          Welcome to my website !
          I’m a french 15 years old junior developer and growing sysadmin passionated of Linux, servers infrastructures
          and open source.
        </p>
      </div>
      <div class="media">
        <i>👨‍💻</i>
      </div>
    </article>
    <article>
      <div class="media purple">
        <i>🗒️</i>
      </div>
      <div class="content">
        <h2>My objectives</h2>
        <p>
          I wanna use and administrate servers but also code in my future job. I really enjoy making these on my free
          time and absolutely want to make them my job.<br>
          Actually in third grade, I want to make an informatics BUT after the high school. I’m also hyped to study at
          school 42. I think the devops job is a good option to balance between servers and code.
        </p>
      </div>
    </article>
    <article>
      <div class="content">
        <h2>My engagements</h2>
        <p>
          I'm always trying to use open source and privacy respectives tools. That’s why I host alternatives to GAFAM's
          services on my server.
          I use Linux (Ubuntu) 90% of the time to code and work and only use windows to play games. Linux is today a
          good alternative to windows, it’s free, open source and powerful !
          I can't stand data privacy violation made particularly by the GAFAM. That's why I support open source and open
          projects !
        </p>
      </div>
      <div class="media pink">
        <i>👊</i>
      </div>
    </article>
    <article>
      <div class="media purple">
        <i>💾</i>
      </div>
      <div class="content">
        <h2>Skills</h2>
        <p>
          Since I’ve started coding, I made a lot of web applications and PWA, with dynamic javascript and a Python
          backend in Flask.
          As database, I mostly use Mongodb and I can't separate it. By working on Linux, I know this OS and the use of
          the shell.
          With my server I learnt how to properly deploy and maintain applications and their load management.
          I'm currently learning nuxt.js and Rust.
          You can check
          <NuxtLink to="/work">
            my projects
          </NuxtLink>
          to see me in action.
        </p>
      </div>
    </article>
    <article>
      <div class="content">
        <h2>Experiences</h2>
        <p>
          Last year I made a portfolio for Ondine CAMPONOVO. It was my first experience with a client.
          I did a training period at a hardware maintenance company where I learnt a lot of things on hardware and
          clients relations.
          It was my first experience in company. For 3 years now, I manage self-hosted services on my home server.
        </p>
      </div>
      <div class="media blue">
        <i>🔮</i>
      </div>
    </article>
    <article>
      <div class="content">
        <h2>
          Discover my
          <NuxtLink to="/work">
            work
          </NuxtLink>
          .
        </h2>
      </div>
      <button id="to-top">
        <i class="fas fa-arrow-up fa-2x" />
      </button>
    </article>
  </section>
</template>
