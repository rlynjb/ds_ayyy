<template>
  <header>
    <div class="logo prose">
      <h1>rein.</h1>
    </div>

    <div class="wrapper md:container md:mx-auto">
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
          <figure><img :src="project.image_thumb" /></figure>
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
  </header>

  <RouterView />

  <footer>
    feel free to contact me etc
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
      if (link?.includes('http')) {
        window.open(link, '_blank')
        return
      }

      this.$router.push({
        path: link
      })
    },
    openNotes(project: IProject) {
      this.project = project
    },
  },
}
</script>


<style scoped lang="postcss">
.logo {
  @apply text-center prose pt-5 pb-5 mb-3 md:container md:mx-auto;
  font-size: 2em;
}
.projects {
  @apply grid grid-cols-4 gap-4;
}
.projects .card-title {
  font-size: 1.5em;
}
.projects .card-subtitle {
  font-size: 0.9em;
}

footer {
  @apply text-center p-10;
}
</style>
