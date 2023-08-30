<script setup lang="ts">
definePageMeta({
  redirect: { name: 'docs-components-button' }
})
</script>

<template>
  <NuxtLayout name="docs">
    <NuxtPage />

    <template #footer>
      <Link is-external show-anchor-icon href="#" size="sm">
        Edit this page on GitHub
      </Link>
    </template>
  </NuxtLayout>
</template>
