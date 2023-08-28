import { type HTMLEchoUIProps } from '@echo-ui/system'
import { button } from '@nextui-org/theme'
import { computed, useAttrs } from 'vue'
import { useRipple } from '@echo-ui/ripple'
import type { SpinnerProps } from '@echo-ui/spinner'
import { useButtonGroupContext } from './use-button-group-context'

interface Props extends HTMLEchoUIProps {
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

export type UseButtonProps = Props

export const useButton = (props: UseButtonProps) => {
  const { className } = useAttrs()
  const groupContext = useButtonGroupContext()
  const isInGroup = !!groupContext

  const {
    as,
    size,
    color,
    variant,
    radius,
    fullWidth = groupContext?.value.fullWidth ?? false,
    isDisabled = groupContext?.value.isDisabled ?? false,
    disableAnimation,
    isIconOnly
  } = props

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
    className: className as any
  }))

  const { onClick: onRippleClickHandler, ripples } = useRipple()

  const Component = as || 'button'

  const onClick = (e: MouseEvent) => {
    props.onClick?.()
    onRippleClickHandler(e)
  }

  const getButtonProps = { onClick }

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
