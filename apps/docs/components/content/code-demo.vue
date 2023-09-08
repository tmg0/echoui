<script setup lang="ts">
import { Card, CardBody, Tabs, Tab } from '@echoui/vue'
import { modules, codes } from '.'

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
