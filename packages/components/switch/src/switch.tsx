import { defineComponent, type PropType, ref, computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { useSwitch, type UseSwitchProps } from './use-switch'

export interface SwitchProps extends Omit<UseSwitchProps, 'ref'> { }

const props = {
  color: String as PropType<SwitchProps['color']>,
  size: String as PropType<SwitchProps['size']>,
  defaultSelected: { type: Boolean, default: undefined },
  isSelected: { type: Boolean, default: undefined },
  isDisabled: Boolean as PropType<SwitchProps['isDisabled']>,
  onValueChange: Function as PropType<SwitchProps['onValueChange']>
}

const isUndefined = (value: any): value is undefined => typeof value === 'undefined'

const Switch = defineComponent({
  props,

  setup (props, { emit, slots }) {
    const domRef = ref()
    const label = computed(() => slots.default?.())

    const isSelected = isUndefined(props.isSelected) ? ref(props.defaultSelected ?? false) : useVModel(props, 'isSelected', emit)
    const {
      Component,
      getBaseProps,
      getWrapperProps,
      getLabelProps,
      getThumbProps,
      getThumbIconProps,
      getStartContentProps,
      getEndContentProps
    } = useSwitch({ ...props, isSelected, ref: domRef })

    return () => (
      <Component {...getBaseProps.value}>
        <span ref={domRef} {...getWrapperProps.value}>
          <span {...getStartContentProps.value}>{slots.startContent?.()}</span>
          <span {...getThumbProps.value}>{slots.thumbIcon?.(getThumbIconProps.value)}</span>
          <span {...getEndContentProps.value}>{slots.endContent?.()}</span>
        </span>
        {label.value && <span {...getLabelProps.value}>{label.value}</span>}
      </Component>
    )
  }
})

export { Switch }
