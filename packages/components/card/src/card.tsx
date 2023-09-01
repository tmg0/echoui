import { defineComponent, provide, ref } from 'vue'
import { Ripple } from '@echoui/ripple'
import { useCard, type UseCardProps } from './use-card'

export type CardProps = UseCardProps

const props = {
  disableRipple: Boolean,
  isPressable: Boolean,
  disableAnimation: Boolean
}

const Card = defineComponent({
  props,

  setup (props, { slots }) {
    const domRef = ref()
    const { Component, context, ripples, getCardProps } = useCard({ ...props, ref: domRef })

    provide('context', context)

    return () => (
      <Component ref={domRef} {...getCardProps.value}>
        {slots.default?.()}
        {props.isPressable && !props.disableAnimation && !props.disableRipple && <Ripple ripples={ripples.value} />}
      </Component>
    )
  }
})

export { Card }
