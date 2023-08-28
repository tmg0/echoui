import { defineComponent, useSlots, type PropType, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { useSwitch, type UseSwitchProps } from './use-switch'

export interface SwitchProps extends Omit<UseSwitchProps, 'ref'> { }

const props = {
  isSelected: Boolean,
  isDisabled: Boolean as PropType<SwitchProps['isDisabled']>
}

const Switch = defineComponent({
  props,

  setup (props, { emit }) {
    const target = ref()
    const slots = useSlots()
    const thumbIcon = slots.thumbIcon?.()
    const isSelected = useVModel(props, 'isSelected', emit)
    const { Component, getBaseProps, getWrapperProps, getThumbProps } = useSwitch({ ...props, isSelected, ref: target })

    return () => (
      <Component {...getBaseProps.value}>
        <span ref={target} {...getWrapperProps.value}>
          <span {...getThumbProps.value}>{thumbIcon}</span>
        </span>
      </Component>
    )
  }
})

export { Switch }
