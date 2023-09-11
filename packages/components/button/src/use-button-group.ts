import type { HTMLEchoUIProps } from '@echoui/system'
import { computed } from 'vue'
import { buttonGroup } from '@nextui-org/theme'
import { type ButtonProps } from './button'
import type { ButtonGroupProps } from './button-group'

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

interface Props extends HTMLEchoUIProps<'div'>, ButtonGroupProps {}

export type UseButtonGroupProps = Props

export const useButtonGroup = (props: UseButtonGroupProps) => {
  const Component = props.as || 'div'

  const styles = computed(() => buttonGroup(props))

  const context = computed(() => ({
    isInGroup: true,
    size: props.size,
    color: props.color,
    variant: props.variant,
    radius: props.radius,
    isDisabled: props.isDisabled,
    fullWidth: props.fullWidth
  }))

  return { Component, styles, context }
}
