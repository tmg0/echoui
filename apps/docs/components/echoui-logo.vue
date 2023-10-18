<script setup lang="ts">
interface Props {
  size: number
  fill?: string
  padding?: number
}

withDefaults(defineProps<Props>(), {
  fill: '#2ac0dd',
  padding: 10
})

const emit = defineEmits(['click'])
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" @click="emit('click')">
    <path d="M29,57 L15 48 Q20,90 47,100 L47 80 Q31,72 29,57" :fill="fill" />
    <path d="M71,57 L85 48 Q80,90 53,100 L53 80 Q69,72 71,57" :fill="fill" />
    <path d="M50,0 Q80,65 50,75 Q20,65 50,0" :fill="fill" />
  </svg>
</template>
