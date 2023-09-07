<script setup lang="ts">
import { Card, CardBody, Tabs, Tab } from '@echoui/vue'

const props = defineProps<{ files: string }>()
const code = ref('')

const DynamicVueLiveDemo = defineAsyncComponent(async () => {
  if (!props.files) { return Promise.reject(props) }
  const path = props.files.split('-').filter(Boolean).join('/')
  const component = await import(/* @vite-ignore */`./${path}.tsx`)
  code.value = component.code.setup.trim()
  return component.default
})
</script>

<template>
  <Tabs default-selected-key="preview" variant="underlined">
    <Tab key="preview" title="Preview">
      <DynamicVueLiveDemo />
    </Tab>

    <Tab key="code" title="Code">
      <Card>
        <CardBody class="whitespace-pre-wrap">
          {{ code }}
        </CardBody>
      </Card>
    </Tab>
  </Tabs>
</template>
