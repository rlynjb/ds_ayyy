<template>
  <main class="prose">
    <div class="intro">
      <h1>
        hello, i'm Reina.<br>
        <span class="prose-2xl">a software engineer specializing in front-end.</span>
      </h1>
      <hr>
      <h2>my skillsets are</h2>
    </div>
    
    <div class="skills">
      <div class="item"
        v-for="skill in skills"
      >
        <h4>{{ skill.name }}</h4> <progress class="progress progress-primary w-56" :value="skill.progress" max="100"></progress>
      </div>
    </div>
    <hr>
  </main>
</template>

<script lang="ts">
export default {
  name: 'HomePage',
  data() {
    return {
      skills: [
        { name: 'Vue3', progress: '100' },
        { name: 'Typescript', progress: '50' },
        { name: 'TailwindCSS/DaisyUI', progress: '90' },
        { name: 'Data Structure and Algorithm', progress: '60' },
        { name: 'System Design', progress: '90' },
        { name: 'Reactjs', progress: '30' },
        { name: 'Apollo Graphql', progress: '30' },
        { name: 'Mongodb', progress: '30' }
      ]
    }
  },
}
</script>

<style lang="postcss">
main.prose {
  @apply md:container md:mx-auto pt-10 pb-10;
}
.intro {
  @apply text-center;
}
.skills {
  @apply grid grid-cols-3 gap-4;
}
.skills .item progress {
  width: 100%;
}
</style>
