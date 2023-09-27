import { defineComponent, ref, type ExtractPropTypes, type PropType, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { VisuallyHidden } from '@echoui/visually-hidden'
import { useCheckbox } from './use-checkbox'
import { CheckboxIcon } from './checkbox-icon'

const props = {
  value: { type: String, default: undefined },
  name: { type: String, default: undefined },
  size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
  color: { type: String as PropType<'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'>, default: 'primary' },
  radius: { type: String as PropType<'none' | 'sm' | 'md' | 'lg' | 'full'>, default: undefined },
  lineThrough: { type: Boolean, default: false },
  isSelected: { type: Boolean, default: undefined },
  defaultSelected: { type: Boolean, default: undefined },
  isRequired: { type: Boolean, default: false },
  isReadOnly: { type: Boolean, default: undefined },
  isDisabled: { type: Boolean, default: false },
  isIndeterminate: { type: Boolean, default: undefined },
  isInvalid: { type: Boolean, default: false },
  validationState: { type: String as PropType<'valid' | 'invalid'>, default: undefined },
  disableAnimation: { type: Boolean, default: false }
}

export type CheckboxProps = ExtractPropTypes<typeof props>

const isUndefined = (value: any): value is undefined => typeof value === 'undefined'

const Checkbox = defineComponent({
  props,

  setup (_props, { slots, emit }) {
    const isSelected = isUndefined(_props.isSelected) ? ref(_props.defaultSelected ?? false) : useVModel(_props, 'isSelected', emit)

    const props = { ...toRefs(_props), isSelected }

    const { Component, getBaseProps, getWrapperProps, getInputProps, getLabelProps, getIconProps } = useCheckbox(props)

    const icon = slots.icon?.(getIconProps.value) ?? <CheckboxIcon {...getIconProps.value} />

    return () => (
      <Component {...getBaseProps.value} style={{ position: 'relative' }}>
        <VisuallyHidden>
          <input {...getInputProps.value} />
        </VisuallyHidden>
        <span {...getWrapperProps.value}>{icon}</span>
        {slots.default && <span {...getLabelProps.value}>{slots.default?.()}</span>}
      </Component>
    )
  }
})

export { Checkbox }
