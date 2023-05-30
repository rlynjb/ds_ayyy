<template>
  <header>
    <div class="logo">
      <h3>hello, i'm </h3>
      <h1>rein.</h1>
      <h5>a software engineer specializing in front-end</h5>
    </div>
  </header>

  <RouterView />

  <div class="wrapper md:container sm:container md:mx-auto">
    <!--
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    -->
    <div class="projects">
      <div class="card bg-base-100 shadow-xl image-full"
        v-for="(project, projectIndex) in projects" :key="'project'+projectIndex"
      >
        <figure><img :src="randomImageURL(project.image_thumb)" /></figure>
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
  </div>

  <footer>
    <h3>
      <a href="https://docs.google.com/document/d/1LOO_sdXimhxD43TeWSkoZbqASsT3B68l9YAdkyxmwNU/edit?usp=share_link"
        target="_blank"
      >
        Resume
      </a>
    </h3>
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
      project: {} as IProject
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
.projects {
  @apply grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4;
}
.projects .card-title {
  font-size: 1.5em;
}
.projects .card-subtitle {
  font-size: 0.9em;
}

footer {
  @apply prose pt-36 pb-20 md:container md:mx-auto;
}
</style>
