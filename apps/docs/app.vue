<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MoonFilledIcon from '~/components/icons/moon.vue'
import SunFilledIcon from '~/components/icons/sun.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div>
    <Component :is="isDark ? SunFilledIcon : MoonFilledIcon" class="cursor-pointer" @click="toggleDark()" />
    <NuxtPage />
  </div>
</template>
