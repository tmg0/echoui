import { computed } from 'vue'
import { toggle } from '@nextui-org/theme'
import { dataAttr } from '@echoui/shared-utils'
import type { HTMLEchoUIProps } from '@echoui/system'

interface Props extends HTMLEchoUIProps {
  isDisabled?: boolean;
  isSelected?: boolean
}

export type UseSwitchProps = Props

export const useSwitch = (props: UseSwitchProps) => {
  const { as, isDisabled } = props
  const Component = as || 'label'

  const slots = computed(() => toggle(props))

  const getBaseProps = computed(() => ({
    class: slots.value.base(),
    'data-disabled': dataAttr(isDisabled)
  }))

  const getWrapperProps = computed(() => ({
    'aria-hidden': true,
    class: slots.value.wrapper()
  }))

  const getThumbProps = computed(() => ({
    class: slots.value.thumb()
  }))

  const getStartContentProps = computed(() => ({
    width: '1em',
    height: '1em',
    class: slots.value.startContent()
  }))

  const getEndContentProps = computed(() => ({
    idth: '1em',
    height: '1em',
    class: slots.value.endContent()
  }))

  return { Component, getBaseProps, getWrapperProps, getThumbProps, getStartContentProps, getEndContentProps }
}
