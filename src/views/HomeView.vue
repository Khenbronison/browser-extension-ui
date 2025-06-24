<script>
import NavBar from '@/components/navigation/NavBar.vue'
import changeTheme from '/composables/changeTheme'
import { ref } from 'vue'
import Extension from '@/components/extension/Extension.vue'
import getExtension from '../../composables/getExtension'

export default {
  name: 'HomeView',
  components: { NavBar, Extension },
  setup() {
    const { setMode, toggleMode, iconSrc } = changeTheme()

    const { extensions, error, extensionloader } = getExtension()
    const activeButton = ref(1)

    extensionloader()

    const removeExtension = (name) => {
      const index = extensions.value.findIndex((ext) => ext.name === name)
      if (index !== -1) {
        extensions.value.splice(index, 1)
      }
    }

    return { extensions, error, setMode, activeButton, removeExtension }
  },
}
</script>

<template>
  <NavBar />
  <div :class="[setMode ? 'light-extensionList-container' : 'dark-extensionList-container']">
    <div><h1 class="font-bold text-2xl">Extensions List</h1></div>
    <div class="flex gap-3 justify-between items-center">
      <button
        @click="activeButton = 1"
        :class="[
          'transition:all duration-200',
          setMode ? 'light-button' : 'dark-button',
          activeButton === 1 ? '!bg-[#f25c54] !text-[#091540]' : '',
        ]"
      >
        All
      </button>

      <button
        @click="activeButton = 2"
        :class="[
          'transition:all duration-200',
          setMode ? 'light-button' : 'dark-button',
          activeButton === 2 ? '!bg-[#f25c54] !text-[#091540]' : '',
        ]"
      >
        Inactive
      </button>

      <button
        @click="activeButton = 3"
        :class="[
          'transition:all duration-200',
          setMode ? 'light-button' : 'dark-button',
          activeButton === 3 ? '!bg-[#f25c54] !text-[#091540]' : '',
        ]"
      >
        Active
      </button>
    </div>
  </div>
  <Extension
    :filterType="activeButton"
    :extensions="extensions"
    :error="error"
    @remove-extension="removeExtension"
  />
</template>
