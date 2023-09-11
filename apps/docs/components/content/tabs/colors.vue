<script setup lang="ts">
import { Tabs, Tab } from '@echoui/vue'

const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Tabs v-for="color in colors" :key="color" :color="color" radius="full" default-selected-key="photos">
      <Tab key="photos" title="Photos" />
      <Tab key="music" title="Music" />
      <Tab key="videos" title="Videos" />
    </Tabs>
  </div>
</template>
