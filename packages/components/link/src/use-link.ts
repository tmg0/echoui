import { computed, useAttrs, type DefineComponent } from 'vue'
import type { LinkVariantProps } from '@nextui-org/theme'
import { link } from '@nextui-org/theme'
import type { HTMLEchoUIProps } from '@echoui/system'
import { dataAttr } from '@echoui/shared-utils'

interface Props extends HTMLEchoUIProps<any>, LinkVariantProps {
  as: 'div' | DefineComponent
  href?: string
  isExternal?: boolean
  showAnchorIcon?: boolean
  isFocused?: boolean
  isDisabled?: boolean
  isFocusVisible?: boolean
  onClick?: () => void
}

export type UseLinkProps = Props

export const useLink = (props: UseLinkProps) => {
  const attrs = useAttrs()
  const { as } = props

  const Component = as || 'a'

  const styles = computed(() => link({ ...props, className: attrs.class as string }))

  const getLinkProps = computed(() => ({
    class: styles.value,
    href: props.href,
    'data-focus': dataAttr(props.isFocused),
    'data-disabled': dataAttr(props.isDisabled),
    'data-focus-visible': dataAttr(props.isFocusVisible),
    onClick: props.onClick
  }))

  return { Component, getLinkProps }
}
