<script setup lang="ts">
import { Switch } from '@echoui/vue'
</script>

<template>
  <div class="flex gap-4">
    <Switch default-selected size="sm">
      Small
    </Switch>
    <Switch default-selected size="md">
      Medium
    </Switch>
    <Switch default-selected size="lg">
      Large
    </Switch>
  </div>
</template>
