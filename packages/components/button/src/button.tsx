import { defineComponent, useSlots, type PropType } from 'vue'
import { Spinner } from '@echo-ui/spinner'
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
  isDisabled: { type: Boolean as PropType<ButtonProps['isDisabled']>, default: undefined },
  disableAnimation: Boolean as PropType<ButtonProps['disableAnimation']>,
  disableRipple: Boolean as PropType<ButtonProps['disableRipple']>,
  isIconOnly: Boolean as PropType<ButtonProps['isIconOnly']>,
  fullWidth: Boolean as PropType<ButtonProps['fullWidth']>,
  onClick: Function as PropType<ButtonProps['onClick']>
}

const Button = defineComponent({
  props,

  setup (props: ButtonProps) {
    const slots = useSlots()
    const { Component, styles, ripples, spinnerSize, getButtonProps } = useButton(props)

    return () => (
      <Component class={styles.value} {...getButtonProps}>
        {props.isLoading && <Spinner color="current" size={spinnerSize.value} />}
        {slots.default?.()}
        {!props.disableRipple && <Ripple ripples={ripples.value} />}
      </Component>
    )
  }
})

export default Button
