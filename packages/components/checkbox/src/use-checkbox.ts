import { type HTMLEchoUIProps } from '@echoui/system'
import { computed, ref, useAttrs } from 'vue'
import { checkbox } from '@nextui-org/theme'
import { clsx } from '@echoui/shared-utils'
import type { CheckboxProps } from './checkbox'

export interface UseCheckboxProps extends HTMLEchoUIProps<'label'>, CheckboxProps { }

export type CheckboxIconProps = {
  'data-checked': string;
  isSelected: boolean;
  isIndeterminate: boolean;
  disableAnimation: boolean;
  class: string;
};

export const useCheckbox = (props: UseCheckboxProps) => {
  const attrs = useAttrs()
  const inputRef = ref()
  const Component = props.as || 'label'

  const slots = computed(() => checkbox(props))

  const getWrapperProps = computed(() => ({
    ...props,
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
    isSelected: props.isSelected,
    isIndeterminate: !!props.isIndeterminate,
    disableAnimation: !!props.disableAnimation,
    class: slots.value.icon({})
  }) as CheckboxIconProps)

  return { Component, getWrapperProps, getInputProps, getLabelProps, getIconProps }
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>
