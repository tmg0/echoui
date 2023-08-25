import { defineComponent } from 'vue'
import { useButton, type UseButtonProps } from './use-button'

export interface ButtonProps extends UseButtonProps {}

const Button = defineComponent({
  setup (props: ButtonProps) {
    const { Component } = useButton(props)

    return (
      <Component>
        <slot />
      </Component>
    )
  }
})

export default Button