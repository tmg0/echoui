<script setup lang="ts">
import { Card, CardBody, Tabs, Tab } from '@echoui/vue'

const props = defineProps<{ files: string }>()

const DynamicVueLiveDemo = defineAsyncComponent(() => {
  if (!props.files) { return Promise.reject(props) }
  const path = props.files.split('-').filter(Boolean).join('/')
  return import(/* @vite-ignore */`./${path}.vue`)
})
</script>

<template>
  <Tabs default-selected-key="preview" variant="underlined">
    <Tab key="preview" title="Preview">
      <DynamicVueLiveDemo />
    </Tab>

    <Tab key="code" title="Code">
      <Card>
        <CardBody>
          <slot />
        </CardBody>
      </Card>
    </Tab>
  </Tabs>
</template>
