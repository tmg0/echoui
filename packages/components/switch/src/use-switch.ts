import { computed, type Ref } from 'vue'
import { useMousePressed } from '@vueuse/core'
import { toggle } from '@nextui-org/theme'
import { dataAttr } from '@echoui/shared-utils'
import type { HTMLEchoUIProps } from '@echoui/system'

interface Props extends HTMLEchoUIProps<'label'> {
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isDisabled?: boolean;
  isSelected: Ref<boolean | undefined>
  onValueChange?: (isSelected: boolean) => void
}

export type UseSwitchProps = Props & { ref: Ref }

export const useSwitch = (props: UseSwitchProps) => {
  const { ref: domRef, as, isSelected, isDisabled } = props
  const { pressed } = useMousePressed({ target: domRef })
  const Component = as || 'label'

  const slots = computed(() => toggle(props))

  const onClick = () => {
    isSelected.value = !isSelected.value
    props.onValueChange?.(isSelected.value)
  }

  const getBaseProps = computed(() => ({
    class: slots.value.base(),
    'data-disabled': dataAttr(isDisabled),
    'data-selected': dataAttr(isSelected.value),
    'data-pressed': dataAttr(pressed.value)
  }))

  const getWrapperProps = computed(() => ({
    'aria-hidden': true,
    class: slots.value.wrapper(),
    onClick
  }))

  const getLabelProps = computed(() => ({
    class: slots.value.label()
  }))

  const getThumbProps = computed(() => ({
    class: slots.value.thumb()
  }))

  const getThumbIconProps = computed(() => ({
    width: '1em',
    height: '1em',
    className: slots.value.thumbIcon(),
    isSelected: isSelected.value
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

  return {
    Component,
    isSelected,
    getBaseProps,
    getWrapperProps,
    getLabelProps,
    getThumbProps,
    getThumbIconProps,
    getStartContentProps,
    getEndContentProps
  }
}
