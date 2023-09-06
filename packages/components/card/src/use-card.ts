import { type HTMLEchoUIProps } from '@echoui/system'
import { useMousePressed } from '@vueuse/core'
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

export const useCard = (props: UseCardProps, { ref: domRef }: any) => {
  const attrs = useAttrs()
  const { pressed: isPressed } = useMousePressed({ target: domRef })
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

  const context: ContextType = {
    isDisabled: props.isDisabled,
    isFooterBlurred: props.isFooterBlurred,
    disableAnimation: props.disableAnimation,
    fullWidth: props.fullWidth,
    slots
  }

  const getCardProps = computed(() => ({
    class: slots.value.base({ class: baseStyles.value }),
    tabIndex: props.isPressable ? 0 : -1,
    'data-pressed': dataAttr(isPressed.value),
    'data-disabled': dataAttr(props.isDisabled),
    onClick
  }))

  return { Component, context, ripples, getCardProps }
}
