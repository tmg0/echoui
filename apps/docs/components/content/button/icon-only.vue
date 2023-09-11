<script setup lang="ts">
import { Button } from '@echoui/vue'
</script>

<template>
  <div class="flex gap-4 items-center">
    <Button is-icon-only color="danger" aria-label="Like">
      <IconsHeart />
    </Button>
    <Button is-icon-only color="warning" variant="faded" aria-label="Take a photo">
      <CameraIcon />
    </Button>
  </div>
</template>
