import { defineComponent, type PropType, ref, type ExtractPropTypes } from 'vue'
import { Spinner } from '@echoui/spinner'
import { Ripple } from '@echoui/ripple'
import { useButton } from './use-button'

const props = {
  variant: { type: String as PropType<'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'>, default: undefined },
  color: { type: String as PropType<'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'>, default: 'default' },
  size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
  radius: { type: String as PropType<'none' | 'sm' | 'md' | 'lg' | 'full'>, default: undefined },
  spinnerPlacement: { type: String as PropType<'start' | 'end'>, default: 'start' },
  fullWidth: { type: Boolean, default: false },
  isIconOnly: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: undefined },
  isLoading: { type: Boolean, default: false },
  disableAnimation: { type: Boolean, default: false },
  disableRipple: { type: Boolean, default: false }
}

export type ButtonProps = ExtractPropTypes<typeof props>

const Button = defineComponent({
  props,

  emits: ['press', 'pressStart', 'pressEnd', 'pressChange', 'pressUp', 'keyDown', 'keyUp', 'click'],

  setup (props, { slots, emit }) {
    const domRef = ref()
    const { Component, styles, ripples, spinnerSize, getButtonProps } = useButton(props, { emit, ref: domRef })

    const spinner = <Spinner color="current" size={spinnerSize.value} />

    return () => (
      <Component ref={domRef} class={styles.value} {...getButtonProps.value}>
        {slots.startContent?.()}
        {props.isLoading && props.spinnerPlacement === 'start' && spinner}
        {slots.default?.()}
        {props.isLoading && props.spinnerPlacement === 'end' && spinner}
        {slots.endContent?.()}
        {!props.disableRipple && <Ripple ripples={ripples.value} removeAfter={750} />}
      </Component>
    )
  }
})

export default Button
