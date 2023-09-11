<script setup lang="ts">
import { Tabs, Tab } from '@echoui/vue'

const radiusList = ['full', 'lg', 'md', 'sm', 'none'] as const
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Tabs v-for="radius in radiusList" :key="radius" :radius="radius" default-selected-key="photos">
      <Tab key="photos" title="Photos" />
      <Tab key="music" title="Music" />
      <Tab key="videos" title="Videos" />
    </Tabs>
  </div>
</template>
