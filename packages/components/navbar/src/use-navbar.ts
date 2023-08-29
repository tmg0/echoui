import type { NavbarVariantProps } from '@nextui-org/theme'
import type { HTMLEchoUIProps } from '@echoui/system'
import { computed, ref, type Ref } from 'vue'
import { navbar } from '@nextui-org/theme'
import { dataAttr } from '@echoui/shared-utils'

interface Props extends HTMLEchoUIProps {
  height?: number | string
  isMenuOpen: Ref<boolean | undefined>
}

export type UseNavbarProps = Props & NavbarVariantProps

export const useNavbar = (props: UseNavbarProps) => {
  const { as, height = '4rem', isMenuOpen } = props
  const isHidden = ref(false)

  const Component = as || 'nav'

  const slots = computed(() => navbar(props))

  const getBaseProps = computed(() => ({
    'data-hidden': dataAttr(isHidden.value),
    'data-menu-open': dataAttr(isMenuOpen.value),
    class: slots.value.base(),
    style: {
      '--navbar-height': height
    }
  }))

  const getWrapperProps = computed(() => ({
    'data-menu-open': dataAttr(isMenuOpen.value),
    class: slots.value.wrapper()
  }))

  return { Component, getBaseProps, getWrapperProps }
}
