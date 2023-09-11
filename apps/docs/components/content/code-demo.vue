<script setup lang="ts">
import { Card, CardBody, Tabs, Tab } from '@echoui/vue'
import { getHighlighter } from 'shikiji'
import { modules, codes } from '.'

const props = defineProps<{ files: string }>()

const DynamicVueLiveDemo = defineAsyncComponent(() => {
  return modules[props.files]?.() as any
})

const shiki = await getHighlighter({
  themes: ['vitesse-dark'],
  langs: ['vue']
})

const code = computed(() => shiki.codeToHtml(codes?.[props.files] ?? '', { lang: 'vue', theme: 'vitesse-dark' }))

</script>

<template>
  <Tabs default-selected-key="preview" variant="underlined">
    <Tab key="preview" title="Preview">
      <Card>
        <CardBody>
          <div>
            <DynamicVueLiveDemo />
          </div>
        </CardBody>
      </Card>
    </Tab>

    <Tab key="code" title="Code">
      <Card>
        <CardBody class="whitespace-pre-wrap bg-[#121212]">
          <div v-html="code" />
        </CardBody>
      </Card>
    </Tab>
  </Tabs>
</template>
