<script setup lang="ts">
import { Tabs, Tab } from '@echoui/vue'
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
      <Tabs>
        <Tab key="photos" title="Photos" />
        <Tab key="music" title="Music" />
        <Tab key="videos" title="Videos" />
      </Tabs>
    </div>
  </NuxtLayout>
</template>
