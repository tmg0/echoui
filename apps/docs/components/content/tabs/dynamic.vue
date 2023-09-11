<script setup lang="ts">
import { Card, CardBody, Tabs, Tab } from '@echoui/vue'

const tabs = [
  {
    id: 'photos',
    label: 'Photos',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 'music',
    label: 'Music',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 'videos',
    label: 'Videos',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]
</script>

<template>
  <Tabs default-selected-key="photos">
    <Tab v-for="item in tabs" :key="item.id" :title="item.label">
      <Card>
        <CardBody>
          {{ item.content }}
        </CardBody>
      </Card>
    </Tab>
  </Tabs>
</template>
