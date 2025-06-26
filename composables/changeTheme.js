import { ref, computed, watch } from 'vue'
import iconSun from '/assets/images/icon-sun.svg'
import iconMoon from '/assets/images/icon-moon.svg'

const storedMode = localStorage.getItem('themeMode')
const setMode = ref(storedMode ? JSON.parse(storedMode) : true)

const changeTheme = () => {
  const toggleMode = () => {
    setMode.value = !setMode.value
    localStorage.setItem('themeMode', JSON.stringify(setMode.value))
  }

  const iconSrc = computed(() => (setMode.value ? iconMoon : iconSun))

  watch(
    setMode,
    (newVal) => {
      if (newVal) {
        document.body.classList.remove('darkMode')
      } else {
        document.body.classList.add('darkMode')
      }
    },
    { immediate: true },
  )

  return { setMode, toggleMode, iconSrc }
}

export default changeTheme
