<script setup lang="ts">
import { Button, Divider } from '@echoui/vue'
</script>

<template>
  <div>
    <h1 class="text-4xl font-extrabold mb-8">
      <slot name="title" />
    </h1>

    <p class="my-4">
      <slot name="description" />
    </p>

    <div class="flex gap-2 mt-6">
      <Button size="sm">
        <IconsSocialGithub />
        Source
      </Button>
    </div>

    <Divider class="my-8" />

    <slot />
  </div>
</template>
