import { defineComponent, useSlots } from 'vue'
import { useButton, type UseButtonProps } from './use-button'

export interface ButtonProps extends UseButtonProps {}

const Button = defineComponent({
  setup (props: ButtonProps) {
    const slots = useSlots()
    const { Component } = useButton(props)

    return () => (
      <Component>
        {slots.default?.()}
      </Component>
    )
  }
})

export default Button
