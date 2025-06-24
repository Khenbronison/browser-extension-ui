<template>
  <div class="toggle-switch">
    <label class="switch-label">
      <input type="checkbox" :checked="modelValue" @change="toggle" class="switch-input" />
      <span
        class="switch-track"
        :class="{ on: modelValue, off: !modelValue }"
        role="switch"
        :aria-checked="modelValue"
        tabindex="0"
        @keydown.space.prevent="toggle"
        @keydown.enter.prevent="toggle"
      >
        <span class="switch-thumb" :class="{ on: modelValue, off: !modelValue }"></span>
      </span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: true },
})
const emit = defineEmits(['update:modelValue'])
const toggle = () => emit('update:modelValue', !props.modelValue)
</script>

<style scoped>
.toggle-switch {
  display: inline-block;
}
.switch-label {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.switch-input {
  display: none;
}
.switch-track {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  display: inline-block;
  position: relative;
  transition: background 0.2s;
  vertical-align: middle;
}
.switch-track.on {
  background: #e53935; /* Red */
}
.switch-track.off {
  background: #222; /* Dark */
}
.switch-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s;
}
.switch-thumb.on {
  transform: translateX(20px);
}
.switch-thumb.off {
  transform: translateX(0);
}
</style>
