<script setup lang="ts">
import { Button } from '@echo-ui/vue'
</script>

<template>
  <div>
    <div class="flex gap-2 p-2">
      <Button>
        Default
      </Button>
      <Button color="primary">
        Primary
      </Button>
      <Button color="secondary">
        Secondary
      </Button>
      <Button color="success">
        Success
      </Button>
      <Button color="warning">
        Warning
      </Button>
      <Button color="danger">
        Danger
      </Button>
    </div>

    <div class="flex gap-2 p-2">
      <Button color="primary" variant="solid">
        Solid
      </Button>
      <Button color="primary" variant="faded">
        Faded
      </Button>
      <Button color="primary" variant="bordered">
        Bordered
      </Button>
      <Button color="primary" variant="light">
        Light
      </Button>
      <Button color="primary" variant="flat">
        Flat
      </Button>
      <Button color="primary" variant="ghost">
        Ghost
      </Button>
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
    </div>

    <div class="flex gap-2 p-2">
      <Button color="primary" is-disabled>
        Disabled
      </Button>
    </div>
  </div>
</template>
