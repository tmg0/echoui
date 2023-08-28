<script setup lang="ts">
import { Switch } from '@echoui/vue'

const isSelected = ref(false)
</script>

<template>
  <div>
    <div>
      <Switch v-model:is-selected="isSelected" />
    </div>
  </div>
</template>
