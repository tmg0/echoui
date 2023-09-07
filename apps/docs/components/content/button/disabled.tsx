import { Button } from '@echoui/vue'

const setup = `<script setup lang="ts">
import { Button } from '@echoui/vue'
</script>

<template>
  <Button is-disabled color="primary">
    Primary
  </Button>
</template>`

export const code = { setup }

export default defineComponent({
  setup () {
    return () => (
      <Button isDisabled color="primary">
        Primary
      </Button>
    )
  }
})
