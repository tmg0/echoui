import { Button } from '@echoui/vue'

const setup = `<script setup lang="ts">
import { Button } from '@echoui/vue'
</script>

<template>
  <Button color="primary">
    Primary
  </Button>
</template>`

export const code = { setup }

export default defineComponent({
  setup () {
    return () => (
      <Button color="primary">
        Primary
      </Button>
    )
  }
})
