import { type HTMLEchoUIProps } from '@echoui/system'
import { button } from '@nextui-org/theme'
import { computed, useAttrs, watch } from 'vue'
import { useMousePressed } from '@vueuse/core'
import { dataAttr } from '@echoui/shared-utils'
import { useRipple } from '@echoui/ripple'
import type { SpinnerProps } from '@echoui/spinner'
import { useButtonGroupContext } from './button-group-context'
import type { ButtonProps } from './button'

interface Props extends HTMLEchoUIProps<'button'>, ButtonProps {}

export type UseButtonProps = Props

export const useButton = (props: UseButtonProps, { emit, ref: domRef }: any) => {
  const attrs = useAttrs()
  const groupContext = useButtonGroupContext()
  const isInGroup = !!groupContext?.isInGroup

  const isDisabledProp = computed(() => groupContext?.isDisabled ?? false)
  const isDisabled = computed(() => isDisabledProp.value || props.isLoading)

  const { pressed: isPressed } = useMousePressed({ target: domRef })

  watch(isPressed, (value) => {
    emit('pressChange', value)
    if (value) { emit('pressStart') }
    if (!value) { emit('pressEnd') }
  })

  const styles = computed(() => button({
    size: props.size ?? groupContext?.size,
    color: props.color ?? groupContext?.color,
    variant: props.variant,
    radius: props.radius,
    fullWidth: props.fullWidth ?? groupContext?.fullWidth ?? false,
    isDisabled: isDisabled.value,
    isInGroup,
    disableAnimation: props.disableAnimation,
    isIconOnly: props.isIconOnly,
    className: attrs.class as string
  }))

  const { onClick: onRippleClickHandler, ripples } = useRipple()

  const Component = props.as || 'button'

  const onClick = (e: MouseEvent) => {
    emit('click')
    emit('press')
    onRippleClickHandler(e)
  }

  const getButtonProps = computed(() => ({
    'data-disabled': dataAttr(isDisabled.value),
    'data-pressed': dataAttr(isPressed.value),
    onClick
  }))

  const spinnerSize = computed(() => {
    const size = props.size ?? 'md'
    const buttonSpinnerSizeMap: Record<string, SpinnerProps['size']> = {
      sm: 'sm',
      md: 'sm',
      lg: 'md'
    }

    return buttonSpinnerSizeMap[size]
  })

  return { Component, styles, ripples, spinnerSize, getButtonProps }
}
