<script setup lang="ts">
interface Props {
  size: number
  fill?: string
  padding?: number
}

const props = withDefaults(defineProps<Props>(), {
  fill: '#2ac0dd',
  padding: 10
})

const emit = defineEmits(['click'])

const STROKE_WIDTH = 2

const position = computed(() => {
  return {
    cx: props.size / 2,
    cy: props.size / 2,
    r: props.size / 2 - props.padding - STROKE_WIDTH
  }
})
</script>

<template>
  <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" @click="emit('click')">
    <circle
      :cx="position.cx"
      :cy="position.cy"
      :r="position.r"
      fill="none"
      :stroke="fill"
      :stroke-width="STROKE_WIDTH"
    />

    <circle
      :cx="position.cx"
      :cy="position.cy"
      :r="position.r - 4"
      :fill="fill"
    />
  </svg>
</template>
