<template>
  <header>
    <div class="logo">
      <h3>hello, i'm </h3>
      <h1>rein.</h1>
      <h5>a software engineer specializing in front-end</h5>
    </div>
    <p>
      I’m a software engineer specializing in front-end with an objective of fullstack development. Currently, I’m focused on building internal apps, extending features, refactoring, and rewriting code on existing applications used by employees at Switch and have gained about 6 years working in a fast-paced collaborative team.
    </p>

    <h5 class="skills-title">
      Below are skills I've gained over the years I've worked in the field
    </h5>
  </header>

  <RouterView />

  <div class="wrapper md:container sm:container md:mx-auto">
    <h5 class="projects-title">
      and these are some projects I've built and worked with other developers.
    </h5>
    <div class="projects">
      <div class="card bg-base-100 shadow-xl image-full"
        v-for="(project, projectIndex) in projects" :key="'project'+projectIndex"
      >
        <figure><img :src="imageURL(project.image_thumb)" /></figure>
        <div class="card-body p-3">
          <h2 class="card-title">{{ project.title }}</h2>
          <p class="card-subtitle">{{ project.subtitle }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-xs"
              @click="gotoLink(project.link)"
            >
              Visit
            </button>
            <button class="btn btn-primary btn-xs"
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

    <h2 class="exp-title">Here's some of my exprience</h2>
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

    <h2 class="exp-resume">
      and for complete history, here's my
      <a href="https://docs.google.com/document/d/1LOO_sdXimhxD43TeWSkoZbqASsT3B68l9YAdkyxmwNU/edit?usp=share_link"
        target="_blank"
      >
        Resume &#10003;
      </a>
    </h2>

    <h5 class="exp-contact">
      I’m currently looking for new opportunities, preferably outside of Las Vegas. If you have a question or just want to say hi, feel free to contact me via
      <a href="https://www.linkedin.com/in/rlynpro/"
        target="_blank"
      >
        LinkedIn &#10003;
      </a>
    </h5>
  </div>

  <footer>
  </footer>
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
            'Develop internal apps using Vue.js consuming and handling thousands of data.',
            'Communicate with developers & managers on a daily basis to build features from ideation to production.',
            'Built impressive landing pages using CSS responsive techniques and design concepts',
            'Occasionally design UI/UX based on project requirements.',
            'Occasionally maintain customer facing websites using Wordpress.'
          ]
        },
        {
          company: 'JS Products',
          date: 'June 2016 - August 2017 // Las Vegas, NV',
          desc: [
            'Developed all public facing websites for stakeholders using Grav, Laravel, Zurb Foundation.',
            'Collaborated with UI/UX Designers using InVision while helping the company keep up to date with current web technology.',
            'Developed a theme starter kit and implemented it on projects.',
            'Developed a customer-facing web app for Kobalttools.com using JavaScript.'
          ]
        },
        /*
        {
          company: 'Brydan Solutions',
          date: 'April 2015 - June 2016 // Las Vegas, NV',
          desc: [
            "Designed websites using Divi theme and researched plugins that fit required functionality.",
            "Developed a customer-facing web app using JavaScript and PHP when necessary.",
            "Clients included Golden Entertainment (goldent.com), PT’s Pub Las Vegas (pteglv.com)"
          ]
        },
        {
          company: 'Gravitas Works',
          date: 'May 2014 - March 2015 // Las Vegas, NV',
          desc: [
            "Gained coding experience through pair programming and guidance from our mentor/CTO",
            "Worked on solving bugs/performance issues",
            "Documented work and communicate issues when they arise",
            "Researched and wrote code snippet Google authentication using Golang and JWT",
            "Wrote code using Golang to interact with APIs",
            "Wrote code for Web scraper using Ruby and Regex",
            "Convert Ember.js web application to use Ember-CLI",
            "Researched latest news/articles and version releases of Ember.js",
            "Wrote a responsive grid system from scratch to avoid bloated CSS",
            "Researched and implemented BEM and OOCSS to organize CSS"
          ]
        }
        */
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
  @apply prose pt-14 pb-5 mb-3 md:container md:mx-auto;
}
.logo {
  font-size: 2em;
}
.logo h1,
.logo h3,
.logo h5 {
  @apply mr-6 mb-0;
  display: inline-block;
  line-height: 1;
}
main {
  @apply pt-8 pb-12;
}

.skills-title {
  font-size: 1.5em;
  margin: 2em 0 0;
}
.projects-title {
  font-size: 2em;
  margin: 0 1em 2em;
}
.projects {
  @apply grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4;
}
.projects .card-title {
  font-size: 1.5em;
}
.projects .card-subtitle {
  font-size: 0.9em;
}

.exp-title {
  font-size: 2em;
  margin: 4em 1em 0;
}
.exp-resume {
  font-size: 1.5em;
  margin: 2em 1em 0.5em;
}
.exp-resume a {
  font-weight: 700;
}
.exp-contact {
  font-size: 1.3em;
  margin: 0 1.2em;
}
.exp-contact a {
  font-weight: 700;
}
.brief-experience .exp {
  margin: 2em;
}
.brief-experience .exp h3 {
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
