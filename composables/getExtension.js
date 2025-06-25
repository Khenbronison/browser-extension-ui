import { ref } from 'vue'

const getExtension = () => {
  const extensions = ref([])
  const error = ref(null)
  const extensionloader = async () => {
    try {
      const response = await fetch('/data.json')

      if (!response.ok) {
        throw new Error('Failed to fetch extensions')
      }

      const data = await response.json()
      extensions.value = data.map((ext) => ({
        id: crypto.randomUUID(),
        ...ext,
      }))
    } catch (err) {
      error.value = err.message || 'An error occurred while fetching extensions'
    }
  }

  return { extensions, error, extensionloader }
}

export default getExtension
