<template>
  <div class="modal-component">
      <!-- The button to open modal -->
    <label for="my-modal-3" class="btn">open modal</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">{{ content.title }}</h3>
        <p class="py-4">{{ content.subtitle }}</p>
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
}
</script>

<style lang="postcss">

</style>