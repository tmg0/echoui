import { defineComponent } from 'vue'
import { useButton, type UseButtonProps } from './use-button'

const Button = defineComponent({
  setup (props: UseButtonProps) {
    const { Component } = useButton(props)

    return (
      <Component>
        <slot />
      </Component>
    )
  }
})

export default Button
