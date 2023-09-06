import { computed, useAttrs } from 'vue'
import type { LinkVariantProps } from '@nextui-org/theme'
import { link } from '@nextui-org/theme'
import type { HTMLEchoUIProps } from '@echoui/system'
import { dataAttr } from '@echoui/shared-utils'

interface Props extends HTMLEchoUIProps<'a'>, LinkVariantProps {
  href?: string
  isExternal?: boolean
  showAnchorIcon?: boolean
  isFocused?: boolean
  isDisabled?: boolean
  isFocusVisible?: boolean
}

export type UseLinkProps = Props

export const useLink = (props: UseLinkProps, ctx: any) => {
  const attrs = useAttrs()
  const { as } = props

  const Component = as || 'a'

  const styles = computed(() => link({ ...props, className: attrs.class as string }))

  const onClick = () => { ctx.emit('click') }

  const getLinkProps = computed(() => ({
    class: styles.value,
    style: { cursor: props.isDisabled ? 'not-allowed' : 'pointer' },
    href: props.href,
    'data-focus': dataAttr(props.isFocused),
    'data-disabled': dataAttr(props.isDisabled),
    'data-focus-visible': dataAttr(props.isFocusVisible),
    onClick
  }))

  return { Component, getLinkProps }
}
