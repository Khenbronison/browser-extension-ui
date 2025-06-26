<template>
  <div>
    <nav
      :class="[
        'flex justify-between items-center rounded-2xl p-2',
        setMode ? 'bg-white' : 'bg-[#2f364b]',
      ]"
    >
      <span class="cursor-pointer">
        <img v-if="setMode" src="/assets/images/logo.svg" alt="logo" />
        <img v-else src="/assets/images/logo-2.svg" alt="logo" />
      </span>
      <span
        @click="toggleMode"
        :class="['transition:all duration-200', setMode ? 'light-theme' : 'dark-theme']"
      >
        <span><img :src="iconSrc" alt="icon" /></span>
      </span>
    </nav>
  </div>
</template>

<script>
import changeTheme from '../../../composables/changeTheme'

export default {
  name: 'NavBar',
  setup() {
    const { setMode, toggleMode, iconSrc } = changeTheme()

    return {
      setMode,
      toggleMode,
      iconSrc,
    }
  },
}
</script>
