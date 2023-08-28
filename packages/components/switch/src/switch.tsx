import { defineComponent, useSlots, type PropType } from 'vue'
import { useSwitch, type UseSwitchProps } from './use-switch'

export interface SwitchProps extends UseSwitchProps { }

const props = {
  isSelected: Boolean as PropType<SwitchProps['isSelected']>,
  isDisabled: Boolean as PropType<SwitchProps['isDisabled']>
}

const Switch = defineComponent({
  props,

  setup (props) {
    const slots = useSlots()
    const thumbIcon = slots.thumbIcon?.()
    const { Component, getBaseProps, getWrapperProps, getThumbProps } = useSwitch(props)

    return () => (
      <Component {...getBaseProps.value}>
        <span {...getWrapperProps.value}>
          <span {...getThumbProps.value}>{thumbIcon}</span>
        </span>
      </Component>
    )
  }
})

export { Switch }
