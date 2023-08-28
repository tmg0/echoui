import { defineComponent, type PropType, ref, computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { useSwitch, type UseSwitchProps } from './use-switch'

export interface SwitchProps extends Omit<UseSwitchProps, 'ref'> { }

const props = {
  color: String as PropType<SwitchProps['color']>,
  size: String as PropType<SwitchProps['size']>,
  defaultSelected: Boolean,
  isSelected: Boolean,
  isDisabled: Boolean as PropType<SwitchProps['isDisabled']>
}

const Switch = defineComponent({
  props,

  setup (props, { emit, slots }) {
    const target = ref()
    const label = computed(() => slots.default?.())

    const isSelected = useVModel(props, 'isSelected', emit)
    const { Component, getBaseProps, getWrapperProps, getLabelProps, getThumbProps, getStartContentProps, getEndContentProps } = useSwitch({ ...props, isSelected, ref: target })

    return () => (
      <Component {...getBaseProps.value}>
        <span ref={target} {...getWrapperProps.value}>
          <span {...getStartContentProps.value}>{slots.startContent?.()}</span>
          <span {...getThumbProps.value}>{slots.thumbIcon?.()}</span>
          <span {...getEndContentProps.value}>{slots.endContent?.()}</span>
        </span>
        {label.value && <span {...getLabelProps.value}>{label.value}</span>}
      </Component>
    )
  }
})

export { Switch }
