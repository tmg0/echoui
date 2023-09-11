<script setup lang="ts">
import { Tabs, Tab } from '@echoui/vue'

const sizes = ['sm', 'md', 'lg'] as const
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Tabs v-for="size in sizes" :key="size" :size="size" default-selected-key="photos">
      <Tab key="photos" title="Photos" />
      <Tab key="music" title="Music" />
      <Tab key="videos" title="Videos" />
    </Tabs>
  </div>
</template>
