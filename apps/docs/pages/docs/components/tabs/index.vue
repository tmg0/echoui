<script setup lang="ts">
import { Tabs, Tab } from '@echoui/vue'

const selectedKey = ref('photos')
</script>

<template>
  <NuxtLayout name="mdx">
    <template #title>
      Tabs
    </template>
    <template #description>
      Tabs organize content into multiple sections and allow users to navigate between them.
    </template>

    <div>
      <Tabs v-model:selected-key="selectedKey">
        <Tab key="photos" title="Photos" />
        <Tab key="music" title="Music" />
        <Tab key="videos" title="Videos" />
      </Tabs>
    </div>
  </NuxtLayout>
</template>
