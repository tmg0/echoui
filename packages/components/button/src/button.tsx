import { defineComponent, type PropType, ref } from 'vue'
import { Spinner } from '@echoui/spinner'
import { Ripple } from '@echoui/ripple'
import { useButton, type UseButtonProps } from './use-button'

export interface ButtonProps extends Omit<UseButtonProps, 'ref'> { }

const props = {
  variant: String as PropType<ButtonProps['variant']>,
  color: String as PropType<ButtonProps['color']>,
  size: { type: String as PropType<ButtonProps['size']>, default: undefined },
  spinnerPlacement: String as PropType<ButtonProps['spinnerPlacement']>,
  radius: String as PropType<ButtonProps['radius']>,
  isLoading: Boolean as PropType<ButtonProps['isLoading']>,
  isDisabled: { type: Boolean as PropType<ButtonProps['isDisabled']>, default: undefined },
  disableAnimation: Boolean as PropType<ButtonProps['disableAnimation']>,
  disableRipple: Boolean as PropType<ButtonProps['disableRipple']>,
  isIconOnly: Boolean as PropType<ButtonProps['isIconOnly']>,
  fullWidth: Boolean as PropType<ButtonProps['fullWidth']>
}

const Button = defineComponent({
  props,

  emits: ['press', 'pressStart', 'pressEnd', 'pressChange', 'pressUp', 'keyDown', 'keyUp', 'click'],

  setup (props, { slots, emit }) {
    const domRef = ref()
    const { Component, styles, ripples, spinnerSize, getButtonProps } = useButton({ ...props, emit, ref: domRef })

    return () => (
      <Component ref={domRef} class={styles.value} {...getButtonProps.value}>
        {props.isLoading && <Spinner color="current" size={spinnerSize.value} />}
        {slots.default?.()}
        {!props.disableRipple && <Ripple ripples={ripples.value} removeAfter={750} />}
      </Component>
    )
  }
})

export default Button
