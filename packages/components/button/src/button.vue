<script setup lang="ts">
import { type UseButtonProps, useButton } from './use-button'

const props = withDefaults(defineProps<UseButtonProps>(), {})

const { Component } = useButton(props)
</script>

<template>
  <Component :is="Component">
    <slot />
  </Component>
</template>
