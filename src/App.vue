<template>
  <header>
    <div class="logo">
      rein portfolio
    </div>

    <div class="wrapper md:container md:mx-auto">
      <!--
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      -->

      <div class="projects">
        <div class="card w-80 bg-base-100 shadow-xl image-full">
          <figure><img src="https://placehold.co/600x400" alt="Shoes" /></figure>
          <div class="card-body p-3">
            <h2 class="card-title">rein portfolio</h2>
            <p class="card-subtitle">Vue3, TailwindCSS, DaisyUI</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary btn-xs">How I built it</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Project } from '@/models/IProject'

export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [] as Project[]
    }
  }
}
</script>


<style scoped lang="postcss">
.logo {
  @apply text-center mb-3;
  font-size: 2em;
}
.projects .card-title {
  font-size: 1.5em;
}
.projects .card-subtitle {
  font-size: 0.9em;
}
</style>
