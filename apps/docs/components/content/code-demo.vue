<script setup lang="ts">
import { Card, CardBody, Tabs, Tab } from '@echoui/vue'

const modules = import.meta.glob('~/components/content/**/*.vue')
const codes = import.meta.glob('~/components/content/**/*.vue', { as: 'raw', eager: true })

const props = defineProps<{ files: string }>()
const code = computed(() => codes[props.files])

const DynamicVueLiveDemo = defineAsyncComponent(() => {
  return modules[props.files]?.() as any
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
