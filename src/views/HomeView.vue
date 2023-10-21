<template>
  <main class="skills-tracker prose">
    <div class="skills">
      <h4>Programming</h4>
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
      <h4>Front-End</h4>
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
      <h4>Back-End</h4>
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

    <div class="skills">
      <h4>Deployment Pipeline</h4>
      <div
        v-for="(skill, sIndex) in deployment_skills"
        :key="'backendskills-'+sIndex"
        class="item"
      >
        <h5>{{ skill.name }}</h5>
        <!--
        <progress v-if="skill.progress" class="progress progress-primary" :value="skill.progress" max="100"></progress>
        -->
      </div>
    </div>

    <div class="skills">
      <h4>Tools I've played around</h4>
      <div
        v-for="(skill, sIndex) in played_skills"
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
        { name: 'Typescript', progress: "100" },
        { name: 'CSS3', progress:"100" },
        { name: 'PostCSS', progress: '30' },
        { name: 'HTML5', progress: '60' },
        { name: 'PHP' },
        { name: 'Coffeescript' },
        { name: 'Ruby' },
        { name: 'Golang' }
      ],
      frontend_skills: [
        { name: 'Vue3', progress: '100' },
        { name: 'Emberjs', progress: '30' },
        { name: 'Tailwind/DaisyUI', progress: '30' },
        { name: 'Nuxt3', progress: '70' },
        { name: 'TailwindCSS/DaisyUI', progress: '90' },
        { name: 'Quasar Framework', progress: '70' },
        { name: 'Grav', progress: "50" },
        { name: 'Zurb Foundation', progress: '30' },
        { name: 'Storybook', progress: '80' }
      ],
      backend_skills: [
        { name: 'Laravel', progress: "50"},
        { name: 'Wordpress (Monolith architecture)', progress: '30' }
      ],
      deployment_skills: [
        { name: 'Git', progress: "50"},
        { name: 'Gitlab', progress: '30' },
        { name: 'Docker CLI', progress: '30' },
        { name: 'Rancher/Nerdctl CLI', progress: '30' },
        { name: 'Jenkins', progress: '30' },
        { name: 'Bash', progress: '30' },
        { name: 'Vim' }
      ],
      played_skills: [
        { name: 'React.js', progress: '30' },
        { name: 'Apollo GraphQL', progress: "50"},
        { name: 'MongoDB', progress: '30' },
        { name: 'Netlify/Netlify Functions', progress: '30' },
        { name: 'D3.js', progress: '30' },
        { name: 'Vuetify', progress: '30' },
        { name: 'FaunaDB' }
      ],
    }
  },
}
</script>

<style lang="postcss">
main.skills-tracker {
  @apply container mx-auto grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 gap-6;
}
.skills {
  @apply col-span-1 grid grid-cols-1 gap-4 content-start;
}
.skills h4 {
  @apply col-span-1 text-secondary;
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
