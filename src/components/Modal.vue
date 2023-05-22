<template>
  <div class="modal-component">
    <div class="modal" v-if="showModal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"
          @click="closeModal"
        >
          ✕
        </label>
        <h3 class="text-lg font-bold">{{ localContent.title }}</h3>
        <p class="py-4">{{ localContent.subtitle }}</p>
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
  max-width: 50rem;
}
</style>