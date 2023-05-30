<template>
  <main class="skills-tracker prose">
    <div class="skills">
      <h4>Coding/Foundation</h4>
      <div class="item"
        v-for="skill in coding_skills"
      >
        <h5>{{ skill.name }}</h5>
        <progress v-if="skill.progress" class="progress progress-primary" :value="skill.progress" max="100"></progress>
      </div>
    </div>

    <div class="skills">
      <h4>Front-end</h4>
      <div class="item"
        v-for="skill in frontend_skills"
      >
        <h5>{{ skill.name }}</h5>
        <progress v-if="skill.progress" class="progress progress-primary" :value="skill.progress" max="100"></progress>
      </div>
    </div>

    <div class="skills">
      <h4>Back-end/Tools</h4>
      <div class="item"
        v-for="skill in backend_skills"
      >
        <h5>{{ skill.name }}</h5>
        <progress v-if="skill.progress" class="progress progress-primary" :value="skill.progress" max="100"></progress>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'HomePage',
  data() {
    return {
      coding_skills: [
        { name: 'JavaScript ES6', progress: '100' },
        { name: 'Typescript', progress: '50' },
        { name: 'Data Structure & Algorithm', progress: '40' },
        { name: 'System Design', progress: '60' },
        { name: 'CSS3' },
        { name: 'PostCSS' },
        { name: 'HTML5' },
      ],
      frontend_skills: [
        { name: 'Vue3', progress: '100' },
        { name: 'TailwindCSS/DaisyUI', progress: '90' },
        { name: 'Reactjs', progress: '30' },
        { name: 'Nuxt3' },
        { name: 'Quasar Framework' },
        { name: 'Vuetify' },
        { name: 'D3.js' },
        { name: 'Zurb Foundation' },
        { name: 'Grav' }
      ],
      backend_skills: [
        { name: 'Mongodb', progress: '30' },
        { name: 'Apollo GraphQL', progress: '50' },
        { name: 'Commandline / Git / Vim', progress: '80' },
        { name: 'Netlify & Serverless Functions' },
        { name: 'Docker' },
        { name: 'Jenkins' },
        { name: 'FaunaDB' },
      ]
    }
  },
}
</script>

<style lang="postcss">
.skills-tracker {
  @apply container mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-12 pb-14 mb-14;
}
.skills {
  @apply col-span-1 grid grid-cols-1 gap-4 content-start;
}
.skills h4 {
  @apply col-span-1;
  text-transform: uppercase;
}
.skills .item {
  line-height: 1;;
}
.skills .item h5 {
  margin: 0;
  line-height: 1;
  font-size: 0.9em;
}
.skills .item progress {
  width: 100%;
}
.skills .item .progress {
  background: #1e1e1e;
}
</style>
