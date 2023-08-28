<script setup lang="ts">
import { Switch } from '@echoui/vue'
import MoonFilledIcon from '~/components/icons/moon.vue'
import SunFilledIcon from '~/components/icons/sun.vue'

const isSelected = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <Switch v-model:is-selected="isSelected" />
    </div>

    <div>
      <Switch v-model:is-selected="isSelected">
        Automatic updates
      </Switch>
    </div>

    <div>
      <Switch v-model:is-selected="isSelected" is-disabled>
        Automatic updates
      </Switch>
    </div>

    <div class="flex gap-4">
      <Switch v-model:is-selected="isSelected" size="sm">
        Small
      </Switch>
      <Switch v-model:is-selected="isSelected" size="md">
        Medium
      </Switch>
      <Switch v-model:is-selected="isSelected" size="lg">
        Large
      </Switch>
    </div>

    <div class="flex gap-4">
      <Switch v-model:is-selected="isSelected" color="default">
        Default
      </Switch>
      <Switch v-model:is-selected="isSelected" color="primary">
        Primary
      </Switch>
      <Switch v-model:is-selected="isSelected" color="secondary">
        Secondary
      </Switch>
      <Switch v-model:is-selected="isSelected" color="success">
        Success
      </Switch>
      <Switch v-model:is-selected="isSelected" color="warning">
        Warning
      </Switch>
      <Switch v-model:is-selected="isSelected" color="danger">
        Danger
      </Switch>
    </div>

    <div>
      <Switch v-model:is-selected="isSelected" size="lg">
        <template #thumbIcon>
          <Component :is="isSelected ? SunFilledIcon : MoonFilledIcon" :size="16" fill="#000" />
        </template>

        Dark mode
      </Switch>
    </div>

    <div>
      <Switch v-model:is-selected="isSelected" color="success" size="lg">
        <template #startContent>
          <SunFilledIcon :size="16" fill="#000" />
        </template>

        <template #endContent>
          <MoonFilledIcon :size="16" />
        </template>

        Dark mode
      </Switch>
    </div>
  </div>
</template>
