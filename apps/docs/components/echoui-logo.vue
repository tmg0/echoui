<script setup lang="ts">
interface Props {
  size: number
  fill: string
}

withDefaults(defineProps<Props>(), {
  fill: '#2ac0dd'
})
</script>

<template>
  <div :style="{ width: `${size}px`, height: `${size}px`}" class="bg-[#11181c] dark:bg-[#ecedee] rounded-lg flex items-center justify-center">
    <svg
      viewBox="0 0 1024 1024"
      :fill="fill"
      :width="size"
      :height="size"
    >
      <path
        d="M512 853.333333C370.773333 853.333333 256 738.56 256 597.333333 256 426.666667 512 138.666667 512 138.666667 512 138.666667 768 426.666667 768 597.333333 768 738.56 653.226667 853.333333 512 853.333333Z"
        :stroke="fill"
      />
    </svg>
  </div>
</template>
