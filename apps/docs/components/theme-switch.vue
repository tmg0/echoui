<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MoonFilledIcon from './icons/moon.vue'
import SunFilledIcon from './icons/sun.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Component :is="isDark ? SunFilledIcon : MoonFilledIcon" class="cursor-pointer" @click="toggleDark()" />
</template>
