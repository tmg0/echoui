import { defineComponent } from 'vue'
import { useButton, type UseButtonProps } from './use-button'

const ButtonGroup = defineComponent({
  setup (props: UseButtonProps) {
    const { Component } = useButton(props)

    return (
      <Component>
        <slot />
      </Component>
    )
  }
})

export default ButtonGroup
