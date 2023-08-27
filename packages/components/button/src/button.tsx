import { defineComponent, useSlots, type PropType } from 'vue'
import { Ripple } from '@echo-ui/ripple'
import { useButton, type UseButtonProps } from './use-button'

export interface ButtonProps extends UseButtonProps { }

const props = {
  variant: String as PropType<ButtonProps['variant']>,
  color: String as PropType<ButtonProps['color']>,
  size: String as PropType<ButtonProps['size']>,
  spinnerPlacement: String as PropType<ButtonProps['spinnerPlacement']>,
  radius: String as PropType<ButtonProps['radius']>,
  isLoading: Boolean as PropType<ButtonProps['isLoading']>,
  isDisabled: Boolean as PropType<ButtonProps['isDisabled']>,
  disableAnimation: Boolean as PropType<ButtonProps['disableAnimation']>,
  disableRipple: Boolean as PropType<ButtonProps['disableRipple']>,
  isIconOnly: Boolean as PropType<ButtonProps['isIconOnly']>,
  fullWidth: Boolean as PropType<ButtonProps['fullWidth']>
}

const Button = defineComponent({
  props,

  setup (props: ButtonProps) {
    const slots = useSlots()
    const { Component, styles, ripples, onClick } = useButton(props)

    return () => (
      <Component class={styles.value} onClick={onClick}>
        {slots.default?.()}
        {!props.disableRipple && <Ripple ripples={ripples.value} />}
      </Component>
    )
  }
})

export default Button
