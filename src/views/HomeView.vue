<template>
  <main class="prose">
    <div class="skills">
      <div class="item"
        v-for="skill in skills"
      >
        <h4>{{ skill.name }}</h4> <progress class="progress progress-primary" :value="skill.progress" max="100"></progress>
      </div>
    </div>
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
  @apply md:container md:mx-auto pb-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 pb-14 mb-14;
}
.skills {
  @apply col-span-2 grid grid-cols-2 gap-4;
}
.skills .item h4 {
  margin: 0;
}
.skills .item progress {
  width: 100%;
}
.skills .item .progress {
  background: #1e1e1e;
}
</style>
