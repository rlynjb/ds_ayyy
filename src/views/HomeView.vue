<template>
  <main class="skills-tracker prose">
    <div class="skills">
      <h4>Coding/Foundation</h4>
      <div
        v-for="(skill, sIndex) in coding_skills"
        :key="'codingskills-'+sIndex"
        class="item"
      >
        <h5>{{ skill.name }}</h5>
        <!--
        <progress v-if="skill.progress" class="progress progress-primary" :value="skill.progress" max="100"></progress>
        -->
      </div>
    </div>

    <div class="skills">
      <h4>Front-end</h4>
      <div
        v-for="(skill, sIndex) in frontend_skills"
        :key="'frontendskills-'+sIndex"
        class="item"
      >
        <h5>{{ skill.name }}</h5>
        <!--
        <progress v-if="skill.progress" class="progress progress-primary" :value="skill.progress" max="100"></progress>
        -->
      </div>
    </div>

    <div class="skills">
      <h4>Back-end/Tools</h4>
      <div
        v-for="(skill, sIndex) in backend_skills"
        :key="'backendskills-'+sIndex"
        class="item"
      >
        <h5>{{ skill.name }}</h5>
        <!--
        <progress v-if="skill.progress" class="progress progress-primary" :value="skill.progress" max="100"></progress>
        -->
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
        { name: 'HTML5', progress: "100" },
        { name: 'CSS3', progress:"100" },
        { name: 'System Design', progress: '60' },
        { name: 'Data Structure & Algorithm', progress: '40' }
      ],
      frontend_skills: [
        { name: 'Vue3', progress: '100' },
        { name: 'Reactjs', progress: '30' },
        { name: 'Emberjs', progress: '30' },
        { name: 'Nuxt3', progress: '70' },
        { name: 'TailwindCSS/DaisyUI', progress: '90' },
        { name: 'Typescript', progress: '70' },
        { name: 'PostCSS', progress: "50" },
        { name: 'Quasar Framework', progress: '80' },
        { name: 'Vuetify', progress: '50' },
        { name: 'Grav', progress: '50' },
      ],
      backend_skills: [
        { name: 'Laravel', progress: "50"},
        //{ name: 'Mongodb', progress: '30' },
        { name: 'Apollo GraphQL', progress: '50' },
        { name: 'Commandline / Git / Vim', progress: '80' },
        { name: 'Netlify & Serverless Functions', progress: '50' },
        { name: 'DockerCLI' },
        { name: 'Rancher/Nerctrl' },
        { name: 'Jenkins' },
        //{ name: 'FaunaDB' },
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
