<script setup lang="ts">
defineProps<{
  size: number
}>()
</script>

<template>
  <div :style="{ width: `${size}px`, height: `${size}px`}" class="bg-[#11181c] dark:bg-[#ecedee] rounded-lg flex items-center justify-center">
    <div :style="{ width: `${size * 0.6}px`, height: `${size * 0.6}px`}" class="bg-[#2ac0dd] rounded-full" />
  </div>
</template>
