<script setup lang="ts">
import { Card, CardBody, Tabs, Tab } from '@echoui/vue'

const props = defineProps<{ files: string }>()
const code = ref('')

const DynamicVueLiveDemo = defineAsyncComponent(async () => {
  if (!props.files) { return Promise.reject(props) }
  const path = props.files.split('-').filter(Boolean).join('/')
  const [module, raw] = await Promise.all([
    import(/* @vite-ignore */`./${path}.vue`),
    import(/* @vite-ignore */`./${path}.vue?raw`)
  ])
  code.value = raw.default
  return module.default
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
