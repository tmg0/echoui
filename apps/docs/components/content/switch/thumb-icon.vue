<script setup lang="ts">
import { Switch } from '@echoui/vue'
import MoonFilledIcon from '~/components/icons/moon.vue'
import SunFilledIcon from '~/components/icons/sun.vue'
</script>

<template>
  <Switch default-selected size="lg">
    <template #thumbIcon="{ isSelected: checked, className }">
      <Component :is="checked ? SunFilledIcon : MoonFilledIcon" :class="className" :size="16" />
    </template>

    Dark mode
  </Switch>
</template>
