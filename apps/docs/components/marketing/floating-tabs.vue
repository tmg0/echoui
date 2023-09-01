<script setup lang="ts">
import { Tabs, Tab } from '@echoui/vue'
</script>

<template>
  <Tabs
    default-selected-key="notes"
    aria-label="Floating tabs example"
    radius="full"
    size="sm"
  >
    <Tab key="notes" title="Notes" />
    <Tab key="tasks" title="Tasks" />
    <Tab key="files" title="Files" />
  </Tabs>
</template>
