<script setup lang="ts">
import { Button } from '@echoui/vue'

const router = useRouter()
</script>

<template>
  <main>
    <Button color="primary" :on-click="() => router.push({ name: 'docs' })">
      Get Started ->
    </Button>
  </main>
</template>
