<template>
  <header>
    <h2 class="logo">
      hello, i'm <b class="text-primary">rein.</b>
    </h2>
    <p>
      I’m a software engineer specializing in front-end with an objective of lead. My goal is to be really good in <b class="text-primary">System Design</b> and <b class="text-primary">Data Structure and Algorithms</b>. Below are languages, frameworks, tools I've touched over the years..
    </p>
  </header>

  <RouterView />

  <div class="wrapper md:container sm:container md:mx-auto">
    <section>
      <h2 class="exp-title">Here's some of my exprience..</h2>
      <div class="brief-experience">
        <div
          v-for="(exp, expIndex) in experience"
          :key="'exp-'+expIndex"
          class="exp"
        >
          <h3>{{ exp.company }}</h3>
          <h6>{{ exp.date }}</h6>
          <ul>
            <li
              v-for="(desc, descIndex) in exp.desc"
              :key="'desc-'+descIndex"
            >
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-zinc-800 p-6">
      <h2 class="exp-resume">
        and for complete history, here's my
        <a href="https://docs.google.com/document/d/1LOO_sdXimhxD43TeWSkoZbqASsT3B68l9YAdkyxmwNU/edit?usp=share_link"
          target="_blank"
          class="text-primary"
        >
          Resume &#10003;
        </a>
      </h2>

      <h5 class="exp-contact">
        I’m currently looking for new opportunities, preferably remote and looking forward to accepting projects.<br/>
        If you have a question or just want to say hi, feel free to contact me via
        <a href="https://www.linkedin.com/in/rlynpro/"
          target="_blank"
          class="text-primary"
        >
          LinkedIn &#10003;
        </a>
      </h5>
    </section>

    <section>
      <h5 class="projects-title">
        and some projects I've worked on..
      </h5>
      <div class="projects">
        <div class="card bg-base-100 shadow-xl image-full rounded-none"
          v-for="(project, projectIndex) in projects" :key="'project'+projectIndex"
        >
          <figure><img :src="imageURL(project.image_thumb)" /></figure>
          <div class="card-body p-3">
            <h2 class="card-title">{{ project.title }}</h2>
            <p class="card-subtitle">{{ project.subtitle }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-secondary btn-xs rounded-none"
                @click="gotoLink(project.link)"
              >
                Visit
              </button>
              <button class="btn btn-secondary btn-xs rounded-none"
                @click="openNotes(project)"
              >
                How I built it
              </button>
            </div>
          </div>
        </div>
      </div><!-- /projects -->
      <Modal
        :content="project"
      />
    </section>
  </div><!-- /wrapper -->

  <footer />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type { IProject } from '@/models/IProject'
import { Projects } from '@/datasource/Projects'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Portfolio',
  components: {
    Modal
  },
  data() {
    return {
      projects: Projects as IProject[],
      project: {} as IProject,
      experience: [
        {
          company: 'Switch',
          date: 'August 2017 - Present // Las Vegas, NV',
          desc: [
            'Knowledge of development and deployment pipeline.',
            'Knowledge of development history of existing applications.',
            'Collaborate with back-end developers.',
            'Implement back-end APIs in front-end apps.',
            'Communicate with managers for project requirements.',
            'Trained new hires',
            'Reversed engineer and documented existing applications using knowledge of UML System Design.',
            'Projects I took ownership (See resume for full description..)', 
          ]
        },
        {
          company: 'JS Products',
          date: 'June 2016 - August 2017 // Las Vegas, NV',
          desc: [
            'Developed impressive public facing websites using Grav, Laravel, Zurb Foundation.',
            'Collaborated with stakeholders for updates and changes of their websites.',
            'Collaborated with UI/UX Designers using InVision.',
            'Helped the company keep up to date with current web technology.',
            'Developed a theme starter kit that is customed to company’s design guideline.',
            'Developed a “Personlized your Ratchet Set” web app for Kobalttools.com using JavaScript.'
          ]
        },
      ],
    }
  },

  methods: {
    gotoLink(link?: String) {
      let urlToString = link?.toString()

      if (link?.includes('http')) {
        window.open(urlToString, '_blank')
        return
      }

      this.$router.push({
        path: urlToString as string
      })
    },
    openNotes(project: IProject) {
      this.project = project
    },
    imageURL(filename?: String) {
      return new URL('/portfolio_thumbs', import.meta.url).href + '/' + filename
    },
    randomImageURL(filename?: String) {
      const randomNumber = (min: any, max: any) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
      }

      return new URL('/'+filename, import.meta.url).href + '/' + randomNumber(1, 11) + '.png'
    },
  },
}
</script>


<style scoped lang="postcss">
header,
main,
.projects,
footer {
  padding: 0 2em;
}
header {
  @apply prose pt-3 pb-1 md:container md:mx-auto;
}
.logo {
  font-size: 3em;
}

.wrapper section {
  @apply mb-20;
}

.skills-title {
  @apply text-primary;
  font-size: 1.5em;
  margin: 2em 0 0;
}
.projects-title {
  @apply text-primary;
  font-size: 1.5em;
  margin: 0 1em 1em;
}
.projects {
  @apply grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4;
}
.projects .card.image-full:before {
  border-radius: 0;
}
.projects .card-title {
  font-size: 1.5em;
}
.projects .card-subtitle {
  font-size: 0.9em;
}

.exp-title {
  @apply text-primary;
  font-size: 1.5em;
  margin: 4em 1em 0;
}
.exp-resume {
  font-size: 1.5em;
}
.exp-resume a {
  font-weight: 700;
}
.exp-contact {
  font-size: 1.3em;
}
.exp-contact a {
  font-weight: 700;
}
.brief-experience .exp {
  margin: 2em;
}
.brief-experience .exp h3 {
  @apply text-secondary;
  font-size: 1.3em;
  font-weight: 600;
}
.brief-experience .exp h6 {
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 0.5em;
}
.brief-experience .exp ul {
  list-style: circle;
  margin-left: 1em;
}
.brief-experience .exp ul li {
  font-size: 0.9em;
}

footer {
  @apply prose pt-36 pb-20 md:container md:mx-auto;
}
</style>
