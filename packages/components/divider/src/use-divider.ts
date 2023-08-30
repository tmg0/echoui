import type { HTMLEchoUIProps } from '@echoui/system'
import { divider, type DividerVariantProps } from '@nextui-org/theme'
import { computed, useAttrs } from 'vue'

interface Props extends HTMLEchoUIProps<'div' | 'hr'> { }

export type UseDividerProps = Props & DividerVariantProps

export const useDivider = (props: UseDividerProps) => {
  const { class: className } = useAttrs()
  const { as, orientation } = props

  let Component = as || 'div'
  if (Component === 'hr' && orientation === 'vertical') {
    Component = 'div'
  }

  const styles = computed(() => divider({ orientation, className: className as string }))

  const getDividerProps = computed(() => ({
    class: styles.value,
    role: 'separator',
    'data-orientation': orientation
  }))

  return { Component, getDividerProps }
}
