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

  const {
    as,
    size = groupContext?.size,
    color = groupContext?.color,
    variant,
    radius,
    fullWidth = groupContext?.fullWidth ?? false,
    isDisabled = groupContext?.isDisabled ?? false,
    disableAnimation,
    isIconOnly
  } = props

  const { pressed: isPressed } = useMousePressed({ target: domRef })

  watch(isPressed, (value) => {
    emit('pressChange', value)
    if (value) { emit('pressStart') }
    if (!value) { emit('pressEnd') }
  })

  const styles = computed(() => button({
    size,
    color,
    variant,
    radius,
    fullWidth,
    isDisabled,
    isInGroup,
    disableAnimation,
    isIconOnly,
    className: attrs.class as string
  }))

  const { onClick: onRippleClickHandler, ripples } = useRipple()

  const Component = as || 'button'

  const onClick = (e: MouseEvent) => {
    emit('click')
    emit('press')
    onRippleClickHandler(e)
  }

  const getButtonProps = computed(() => ({
    'data-disabled': dataAttr(isDisabled),
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
