<template>
  <div v-if="error" :class="['text-center', setMode ? 'light-error' : 'dark-error']">
    <h1>{{ error }}</h1>
  </div>

  <div v-else class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    <div
      v-for="extension in filteredExtensions"
      :key="extension.id"
      :class="[setMode ? 'light-card' : 'dark-card']"
    >
      <div class="flex items-center">
        <span class="mr-2"><img :src="'/src' + extension.logo" alt="logo" /></span>
        <div>
          <h1 class="text-[14px] font-bold">{{ extension.name }}</h1>
          <p class="text-[12px]">{{ extension.description }}</p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          :class="[setMode ? 'light-button' : 'dark-button']"
          @click="$emit('remove-extension', extension.name)"
        >
          Remove
        </button>
        <ExtensionToggle v-model="extension.isActive" />
      </div>
    </div>
  </div>
</template>

<script>
import ExtensionToggle from './ExtensionToggle.vue'
import changeTheme from '../../../composables/changeTheme'
import { ref, computed } from 'vue'

export default {
  name: 'Extension',
  props: {
    filterType: Number,
    extensions: Array,
    error: String,
  },
  components: { ExtensionToggle },
  setup(props) {
    const { setMode } = changeTheme()

    const filteredExtensions = computed(() => {
      if (props.filterType === 1) {
        return props.extensions
      }
      if (props.filterType === 2) {
        return props.extensions.filter((ext) => !ext.isActive)
      }
      if (props.filterType === 3) {
        return props.extensions.filter((ext) => ext.isActive)
      }
      return []
    })

    return { setMode, filteredExtensions }
  },
}
</script>
