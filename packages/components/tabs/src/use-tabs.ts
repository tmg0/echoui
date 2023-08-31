import type { HTMLEchoUIProps } from '@echoui/system'
import { computed, useAttrs } from 'vue'
import { tabs, type TabsReturnType } from '@nextui-org/theme'
import { clsx } from '@echoui/shared-utils'

interface Props extends HTMLEchoUIProps<'div'> {
  disableAnimation?: boolean
  disableCursorAnimation?: boolean
  isDisabled?: boolean
}

export type ValuesType = {
  slots: TabsReturnType
  disableCursorAnimation?: boolean
  disableAnimation?: boolean
  isDisabled?: boolean
};

export type UseTabsProps = Props

export const useTabs = (props: UseTabsProps) => {
  const attrs = useAttrs()

  const { as, isDisabled, disableAnimation, disableCursorAnimation } = props

  const Component = as || 'div'

  const slots = computed(() => tabs({ ...props, className: attrs.class as string }))

  const values = computed<Record<string, any>>(() => ({
    slots: slots.value,
    isDisabled,
    disableAnimation,
    disableCursorAnimation
  }))

  const getBaseProps = computed(() => ({
    'data-slot': 'base',
    class: slots.value.base({ class: clsx(attrs.class) })
  }))

  const getTabListProps = computed(() => ({
    'data-slot': 'tabList',
    class: slots.value.tabList({ class: clsx(attrs.class) })
  }))

  return { Component, values, getBaseProps, getTabListProps }
}
