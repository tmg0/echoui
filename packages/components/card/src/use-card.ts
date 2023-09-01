import { type HTMLEchoUIProps } from '@echoui/system'
import { dataAttr } from '@echoui/shared-utils'
import { useRipple } from '@echoui/ripple'
import { type CardReturnType, type CardVariantProps, card } from '@nextui-org/theme'
import { computed, useAttrs, type ComputedRef } from 'vue'

interface Props extends HTMLEchoUIProps<'div' | 'button'> {
  disableRipple?: boolean
  allowTextSelectionOnPress?: boolean
  fullWidth?: boolean
  isDisabled?: boolean
  isFooterBlurred?: boolean
  disableAnimation?: boolean
  isPressable?: boolean
  onClick?: () => void
}

export type ContextType = {
  slots: ComputedRef<CardReturnType>
  isDisabled?: CardVariantProps['isDisabled']
  isFooterBlurred?: CardVariantProps['isFooterBlurred']
  disableAnimation?: CardVariantProps['disableAnimation']
  fullWidth?: CardVariantProps['fullWidth']
};

export type UseCardProps = Props

export const useCard = (props: UseCardProps) => {
  const attrs = useAttrs()
  const { as } = props

  const Component = as || (props.isPressable ? 'button' : 'div')
  const { onClick: onRippleClickHandler, ripples } = useRipple()

  const onClick = (e: MouseEvent) => {
    props.onClick?.()
    if (!props.disableAnimation && !props.disableRipple) {
      onRippleClickHandler(e)
    }
  }

  const slots = computed(() => card(props))
  const baseStyles = computed(() => attrs.class as string)

  const context = computed<ContextType>(() => ({
    isDisabled: props.isDisabled,
    isFooterBlurred: props.isFooterBlurred,
    disableAnimation: props.disableAnimation,
    fullWidth: props.fullWidth,
    slots
  }))

  const getCardProps = computed(() => ({
    class: slots.value.base({ class: baseStyles.value }),
    'data-disabled': dataAttr(props.isDisabled),
    onClick
  }))

  return { Component, context, ripples, getCardProps }
}
