import { type HTMLEchoUIProps } from '@echoui/system'
import { button } from '@nextui-org/theme'
import { computed, useAttrs, type Ref } from 'vue'
import { useMousePressed } from '@vueuse/core'
import { dataAttr } from '@echoui/shared-utils'
import { useRipple } from '@echoui/ripple'
import type { SpinnerProps } from '@echoui/spinner'
import { useButtonGroupContext } from './button-group-context'

interface Props extends HTMLEchoUIProps<'button'> {
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  spinnerPlacement?: 'start' | 'end'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  isLoading?: boolean
  isDisabled?: boolean
  disableAnimation?: boolean
  disableRipple?: boolean
  isIconOnly?: boolean
  fullWidth?: boolean
  onClick?: () => void
}

export type UseButtonProps = Props & { ref: Ref }

export const useButton = (props: UseButtonProps) => {
  const attrs = useAttrs()
  const groupContext = useButtonGroupContext()
  const isInGroup = !!groupContext?.isInGroup

  const {
    ref: domRef,
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
    props.onClick?.()
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
