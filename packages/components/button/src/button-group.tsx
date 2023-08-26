import { defineComponent, useSlots } from 'vue'
import { useButton, type UseButtonProps } from './use-button'

const ButtonGroup = defineComponent({
  setup (props: UseButtonProps) {
    const slots = useSlots()
    const { Component } = useButton(props)

    return () => (
      <Component>
        {slots.default}
      </Component>
    )
  }
})

export default ButtonGroup
