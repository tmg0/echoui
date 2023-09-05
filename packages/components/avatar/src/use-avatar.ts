import { avatar } from '@nextui-org/theme'
import type { HTMLEchoUIProps } from '@echoui/system'
import { dataAttr } from '@echoui/shared-utils'
import { computed, useAttrs } from 'vue'

interface Props extends HTMLEchoUIProps<'div' | 'button'> {
  src?: string,
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  size?: 'sm' | 'md' | 'lg',
  isBordered?: boolean
  isDisabled?: boolean
  isFocusable?: boolean
}

export type UseAvatarProps = Props

export const useAvatar = (props: UseAvatarProps) => {
  const attrs = useAttrs()
  const Component = props.as || 'div'
  const isInGroup = false
  const isInGridGroup = false

  const slots = computed(() => avatar({
    color: props.color,
    radius: props.radius,
    size: props.size,
    isBordered: props.isBordered,
    isDisabled: props.isDisabled,
    isInGroup,
    isInGridGroup
  }))

  const canBeFocused = computed(() => props.isFocusable || props.as === 'button')

  const getAvatarProps = computed(() => ({
    tabIndex: canBeFocused.value ? 0 : -1,
    class: slots.value.base({
      class: attrs.class as string
    })
  }))

  const getImageProps = computed(() => ({
    src: props.src,
    'data-loaded': dataAttr(true),
    class: slots.value.img()
  }))

  return { Component, getAvatarProps, getImageProps }
}
