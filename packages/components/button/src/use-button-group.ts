import type { HTMLEchoUIProps } from '@echoui/system'
import { computed } from 'vue'
import { buttonGroup } from '@nextui-org/theme'
import { type ButtonProps } from './button'

export type ContextType = {
  size?: ButtonProps['size']
  color?: ButtonProps['color']
  variant?: ButtonProps['variant']
  radius?: ButtonProps['radius']
  isDisabled?: ButtonProps['isDisabled']
  disableAnimation?: ButtonProps['disableAnimation']
  disableRipple?: ButtonProps['disableRipple']
  isIconOnly?: ButtonProps['isIconOnly']
  fullWidth?: boolean
}

interface Props extends HTMLEchoUIProps<'div'> {
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  fullWidth?: boolean
  isDisabled?: boolean
}

export type UseButtonGroupProps = Props

export const useButtonGroup = (props: UseButtonGroupProps & ContextType) => {
  const { as, size, color, variant, radius, isIconOnly = false, isDisabled = false, disableAnimation = false, disableRipple, fullWidth = false } = props

  const Component = as || 'div'

  const styles = computed(() => buttonGroup(props))

  const context = computed(() => ({
    size,
    color,
    variant,
    radius,
    isIconOnly,
    isDisabled,
    disableAnimation,
    disableRipple,
    fullWidth
  }))

  return { Component, styles, context }
}
