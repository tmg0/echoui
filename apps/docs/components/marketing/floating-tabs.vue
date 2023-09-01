<script setup lang="ts">
import { Tabs, Tab } from '@echoui/vue'
</script>

<template>
  <Tabs
    default-selected-key="notes"
    aria-label="Floating tabs example"
    radius="full"
    size="sm"
    class="absolute left-[170px] -top-[160px] animate-[levitate_17s_ease_infinite_1s]"
  >
    <Tab key="notes" title="Notes" />
    <Tab key="tasks" title="Tasks" />
    <Tab key="files" title="Files" />
  </Tabs>
</template>
