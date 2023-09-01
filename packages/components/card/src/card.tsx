import { defineComponent, provide } from 'vue'
import { Ripple } from '@echoui/ripple'
import { useCard, type UseCardProps } from './use-card'

export type CardProps = UseCardProps

const props = {
  disableRipple: Boolean,
  isPressable: { type: Boolean, default: true },
  disableAnimation: Boolean
}

const Card = defineComponent({
  props,

  setup (props, { slots }) {
    const { Component, context, ripples, getCardProps } = useCard(props)

    provide('context', context)

    return () => (
      <Component {...getCardProps.value}>
        {slots.default?.()}
        {props.isPressable && !props.disableAnimation && !props.disableRipple && <Ripple ripples={ripples.value} />}
      </Component>
    )
  }
})

export { Card }
