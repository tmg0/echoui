<script setup lang="ts">
import { Switch } from '@echoui/vue'
import MoonFilledIcon from '~/components/icons/moon.vue'
import SunFilledIcon from '~/components/icons/sun.vue'
</script>

<template>
  <Switch default-selected color="success" size="lg">
    <template #startContent>
      <SunFilledIcon :size="16" fill="#000" />
    </template>

    <template #endContent>
      <MoonFilledIcon :size="16" />
    </template>

    Dark mode
  </Switch>
</template>
