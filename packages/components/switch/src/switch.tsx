import { defineComponent } from 'vue'
import { useSwitch } from './use-switch'

const Switch = defineComponent({
  setup () {
    const { Component } = useSwitch()

    return () => (
      <Component>

      </Component>
    )
  }
})

export { Switch }
