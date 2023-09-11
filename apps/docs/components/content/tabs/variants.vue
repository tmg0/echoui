<script setup lang="ts">
import { Tabs, Tab } from '@echoui/vue'

const variants = ['solid', 'underlined', 'bordered', 'light'] as const
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Tabs v-for="variant in variants" :key="variant" :variant="variant" default-selected-key="photos">
      <Tab key="photos" title="Photos" />
      <Tab key="music" title="Music" />
      <Tab key="videos" title="Videos" />
    </Tabs>
  </div>
</template>
