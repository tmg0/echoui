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
      <Button color="primary" is-disabled>
        Disabled
      </Button>
    </div>
  </div>
</template>
