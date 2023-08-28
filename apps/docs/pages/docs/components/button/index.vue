<script setup lang="ts">
import { Button } from '@echo-ui/vue'
</script>

<template>
  <div>
    <div class="flex gap-2 p-2">
      <Button color="primary">
        Disabled
      </Button>
    </div>

    <div class="flex gap-2 p-2">
      <Button color="primary" is-disabled>
        Disabled
      </Button>
    </div>

    <div class="flex gap-2 p-2">
      <Button size="sm">
        Small
      </Button>
      <Button size="md">
        Medium
      </Button>
      <Button size="lg">
        Large
      </Button>
    </div>

    <div class="flex gap-2 p-2">
      <Button radius="full">
        Full
      </Button>
      <Button radius="lg">
        Large
      </Button>
      <Button radius="md">
        Medium
      </Button>
      <Button radius="sm">
        Small
      </Button>
      <Button radius="none">
        None
      </Button>
    </div>

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
      <Button color="primary" is-disabled is-loading>
        Loading
      </Button>
    </div>
  </div>
</template>
