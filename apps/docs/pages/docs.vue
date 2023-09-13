<script setup lang="ts">
const { toc } = useContent()

definePageMeta({
  redirect: { name: 'docs-components-button' }
})

const headings = computed(() => toc.value.links)
</script>

<template>
  <NuxtLayout name="docs">
    <NuxtPage />

    <template #toc>
      <DocsToc :headings="headings" />
    </template>

    <template #footer>
      <Link is-external show-anchor-icon href="#" size="sm">
        Edit this page on GitHub
      </Link>
    </template>
  </NuxtLayout>
</template>
