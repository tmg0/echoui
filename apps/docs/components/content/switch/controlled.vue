<script setup lang="ts">
import { Switch } from '@echoui/vue'

const isSelected = ref(true)
</script>

<template>
  <div>
    <Switch v-model:is-selected="isSelected">
      Airplane mode
    </Switch>

    <div class="text-sm text-default-500">
      Selected: {{ isSelected }}
    </div>
  </div>
</template>
