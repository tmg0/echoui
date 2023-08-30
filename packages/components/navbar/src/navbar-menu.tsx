import { defineComponent } from 'vue'
import type { HTMLEchoUIProps } from '@echoui/system'
import { dataAttr } from '@echoui/shared-utils'
import { useNavbarContext } from './navbar-context'

export interface NavbarMenuProps extends HTMLEchoUIProps<'ul'> { }

const NavbarMenu = defineComponent({
  name: 'EchoNavbarMenu',

  setup (_, { slots }) {
    const ctx = useNavbarContext()

    return () => ctx?.isMenuOpen.value && (
      <ul
        class={ctx?.slots.value.menu()}
        data-open={dataAttr(ctx?.isMenuOpen.value)}
      >
        {slots.default?.()}
      </ul>
    )
  }
})

export { NavbarMenu }
