<script setup lang="ts">
import { Button } from '@echoui/vue'
</script>

<template>
  <div class="flex gap-4 items-center">
    <Button radius="full">
      Full
    </Button>
    <Button radius="lg">
      Large
    </Button>
    <Button radius="md">
      Medium
    </Button>
    <Button radius="sm">
      Small
    </Button>
    <Button radius="none">
      None
    </Button>
  </div>
</template>
