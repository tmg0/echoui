<script setup lang="ts">
import { Switch } from '@echoui/vue'
import { useDark, useToggle } from '@vueuse/core'
import MoonFilledIcon from '../icons/moon.vue'
import SunFilledIcon from '../icons/sun.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isSelected = computed({
  get () { return isDark.value },
  set (value) { toggleDark(value) }
})
</script>

<template>
  <div class="hidden lg:flex flex-col relative z-20 w-1/2">
    <Switch v-model:is-selected="isSelected" size="lg" class="absolute -top-[220px] -right-[40px] animate-[levitate_13s_ease_infinite_1s_reverse]">
      <template #startContent>
        <SunFilledIcon :size="16" fill="#000" />
      </template>

      <template #endContent>
        <MoonFilledIcon :size="16" />
      </template>
    </Switch>

    <MarketingFloatingTabs class="absolute left-[170px] -top-[160px] animate-[levitate_17s_ease_infinite_1s]" />
  </div>
</template>
