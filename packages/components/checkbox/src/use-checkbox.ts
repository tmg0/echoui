import { type HTMLEchoUIProps } from '@echoui/system'
import { computed, ref, useAttrs, type Ref } from 'vue'
import { checkbox } from '@nextui-org/theme'
import { clsx, dataAttr } from '@echoui/shared-utils'
import type { CheckboxProps } from './checkbox'

type ToRefs<T> = {
  [K in keyof T]: Ref<T[K]>
}

export interface UseCheckboxProps extends HTMLEchoUIProps<'label'>, ToRefs<CheckboxProps> { }

export type CheckboxIconProps = {
  'data-checked': string;
  isSelected: boolean;
  isIndeterminate: boolean;
  disableAnimation: boolean;
  class: string;
};

export const useCheckbox = (props: UseCheckboxProps) => {
  const attrs = useAttrs()
  const domRef = ref()
  const inputRef = ref()
  const Component = props.as || 'label'

  const slots = computed(() => checkbox({
    color: props.color.value,
    size: props.size.value,
    radius: props.radius?.value,
    lineThrough: props.lineThrough.value,
    isDisabled: props.isDisabled.value,
    disableAnimation: props.disableAnimation.value
  }))

  const onClick = () => {
    if (!props.isSelected) { return }
    props.isSelected.value = !props.isSelected.value
  }

  const getBaseProps = computed(() => ({
    ref: domRef,
    class: slots.value.base({ class: attrs.class as string }),
    'data-disabled': dataAttr(props.isDisabled.value),
    'data-selected': dataAttr(props.isSelected?.value || props.isIndeterminate?.value),
    'data-invalid': dataAttr(props.isInvalid.value),
    'data-indeterminate': dataAttr(props.isIndeterminate?.value),
    onClick
  }))

  const getWrapperProps = computed(() => ({
    'aria-hidden': true,
    class: clsx(slots.value.wrapper({ class: clsx(attrs.class) }))
  }))

  const getInputProps = computed(() => ({
    ref: inputRef
  }))

  const getLabelProps = computed(() => ({
    class: slots.value.label({})
  }))

  const getIconProps = computed(() => ({
    isSelected: props.isSelected?.value,
    isIndeterminate: !!props.isIndeterminate?.value,
    disableAnimation: !!props.disableAnimation.value,
    class: slots.value.icon({})
  }) as CheckboxIconProps)

  return { Component, getBaseProps, getWrapperProps, getInputProps, getLabelProps, getIconProps }
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>
