<script setup lang="ts">
import { Switch } from '@echoui/vue'
</script>

<template>
  <div class="flex gap-4">
    <Switch default-selected color="default">
      Default
    </Switch>
    <Switch default-selected color="primary">
      Primary
    </Switch>
    <Switch default-selected color="secondary">
      Secondary
    </Switch>
    <Switch default-selected color="success">
      Success
    </Switch>
    <Switch default-selected color="warning">
      Warning
    </Switch>
    <Switch default-selected color="danger">
      Danger
    </Switch>
  </div>
</template>
