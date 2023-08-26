import { type HTMLEchoUIProps } from '@echo-ui/system'
import { button } from '@echo-ui/theme'
import { computed, useAttrs } from 'vue'
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
}

export type UseButtonProps = Props

export const useButton = (props: UseButtonProps) => {
  const { className } = useAttrs()
  const groupContext = useButtonGroupContext()
  const isInGroup = !!groupContext

  const { as, size, color, variant, radius, fullWidth, isDisabled, disableAnimation, isIconOnly } = props

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

  const Component = as || 'button'

  return { Component, styles }
}
