import { defineComponent, useSlots } from 'vue'
import { useButton, type UseButtonProps } from './use-button'

export interface ButtonProps extends UseButtonProps {}

const Button = defineComponent({
  setup (props: ButtonProps) {
    const slots = useSlots()
    const { Component, styles } = useButton(props)

    return () => (
      <Component class={styles.value}>
        {slots.default?.()}
      </Component>
    )
  }
})

export default Button
