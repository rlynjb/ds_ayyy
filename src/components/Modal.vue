<template>
  <div class="modal-component">
    <div class="modal" v-if="showModal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"
          @click="closeModal"
        >
          ✕
        </label>

        <div class="info prose">
          <h1 class="mb-0">{{ localContent.title }}</h1>
          <p class="py-4">{{ localContent.subtitle }}</p>
        </div>

        <div class="notes prose" v-html="localContent.notes"></div>

        <div class="attachments">
          <img v-for="img in localContent.images"
            :src="imageURL(img)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { IProject } from '@/models/IProject'

export default {
  name: 'Modal',
  props: {
    content: {
      type: Object as () => IProject,
      default: () => {
        return {}
      }
    }
  },

  data() {
    return {
      localContent: {} as IProject,
      showModal: false,
    }
  },

  watch: {
    content(val) {
      this.localContent = val
      this.showModal = true
    },
  },

  methods: {
    closeModal() {
      this.localContent = {} as IProject
      this.showModal = false
    },
    imageURL(filename: String) {
      return new URL('/src/assets/'+filename, import.meta.url).href
    },
  },
}
</script>

<style lang="postcss">
.modal-component .modal {
  background: rgba(0,0,0,0.8);
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
}
.modal-component .modal-box {
  @apply p-8;
  max-width: 80vw;
}
.modal-component .prose {
  max-width: 100%;
}
.modal-component .info {
  @apply text-center;
}
.modal-component .attachments {
  @apply mt-8;
}
.modal-component .attachments img {
  width: 100%;
}
.modal-component .notes section {
  @apply rounded-lg bg-gray-800;
  padding: 2em;
  margin: 2em;
}
.modal-component .notes section .subnote {
  @apply grid grid-cols-3 gap-4 grid-flow-row auto-rows-max;
}
.modal-component .notes section ul {
  padding-left: 0.5em;
  margin: 0;
}

.modal-component .notes section li {
  margin: 0.5em;
  line-height: 1.5;
}
.modal-component .notes section h3 {
  @apply font-normal text-gray-500;
  line-height: 1;
  margin-bottom: 0.5em;
  font-size: 1.5em;
  margin: 0 0 1em;
}
.modal-component .notes section p {
  margin: 0;
}
</style>