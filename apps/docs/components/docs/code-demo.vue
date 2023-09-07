<script setup lang="ts">
import { Card, CardBody, Tabs, Tab } from '@echoui/vue'

withDefaults(defineProps<{ code?: string }>(), { code: '' })
</script>

<template>
  <Tabs default-selected-key="preview" variant="underlined">
    <Tab key="preview" title="Preview">
      <slot name="preview" />
    </Tab>

    <Tab key="code" title="Code">
      <Card>
        <CardBody>
          <slot name="code" />
        </CardBody>
      </Card>
    </Tab>
  </Tabs>
</template>
