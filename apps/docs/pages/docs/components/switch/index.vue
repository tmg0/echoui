<script setup lang="ts">
import { Switch } from '@echoui/vue'
import MoonFilledIcon from '~/components/icons/moon.vue'
import SunFilledIcon from '~/components/icons/sun.vue'

const isSelected = ref(true)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <Switch default-selected />
    </div>

    <div>
      <Switch default-selected>
        Automatic updates
      </Switch>
    </div>

    <div>
      <Switch default-selected is-disabled>
        Automatic updates
      </Switch>
    </div>

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

    <div>
      <Switch default-selected size="lg">
        <template #thumbIcon="{ isSelected: checked, className }">
          <Component :is="checked ? SunFilledIcon : MoonFilledIcon" :class="className" :size="16" />
        </template>

        Dark mode
      </Switch>
    </div>

    <div>
      <Switch default-selected color="success" size="lg">
        <template #startContent>
          <SunFilledIcon :size="16" fill="#000" />
        </template>

        <template #endContent>
          <MoonFilledIcon :size="16" />
        </template>

        Dark mode
      </Switch>
    </div>

    <div>
      <Switch v-model:is-selected="isSelected">
        Airplane mode
      </Switch>

      <div class="text-sm text-default-500">
        Selected: {{ isSelected }}
      </div>
    </div>
  </div>
</template>
