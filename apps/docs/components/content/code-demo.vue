<script setup lang="ts">
import { Card, CardBody, Tabs, Tab } from '@echoui/vue'
import { getHighlighter } from 'shikiji'
import { modules, codes } from '.'

const props = defineProps<{ files: string }>()

const domRef = ref()
const selectedKey = ref('preview')

const DynamicVueLiveDemo = defineAsyncComponent(() => {
  return modules[props.files]?.() as any
})

const shiki = await getHighlighter({
  themes: ['vitesse-dark'],
  langs: ['vue']
})

const code = computed(() => shiki.codeToHtml(codes?.[props.files] ?? '', { lang: 'vue', theme: 'vitesse-dark' }))

watch(selectedKey, async () => {
  if (selectedKey.value === 'code') {
    await nextTick()
    const shadow = domRef.value
    if (!shadow) { return }
    const shadowRoot = shadow.shadowRoot ?? shadow.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = code.value
  }
})
</script>

<template>
  <Tabs v-model:selected-key="selectedKey" variant="underlined">
    <Tab key="preview" title="Preview">
      <div class="relative z-10 w-full h-full border border-default-200 dark:border-default-100 rounded-lg px-2 py-4">
        <div class="px-2 py-4">
          <DynamicVueLiveDemo />
        </div>
      </div>
    </Tab>

    <Tab key="code" title="Code">
      <Card>
        <CardBody class="whitespace-pre-wrap py-1 bg-[#121212]">
          <div ref="domRef" />
        </CardBody>
      </Card>
    </Tab>
  </Tabs>
</template>
