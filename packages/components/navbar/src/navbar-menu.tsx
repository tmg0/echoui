import { defineComponent, Teleport } from 'vue'
import type { HTMLEchoUIProps } from '@echoui/system'
import { dataAttr } from '@echoui/shared-utils'
import { useNavbarContext } from './navbar-context'

export interface NavbarMenuProps extends HTMLEchoUIProps<'ul'> { }

const NavbarMenu = defineComponent({
  name: 'EchoNavbarMenu',

  setup (_, { slots }) {
    const ctx = useNavbarContext()

    return () => (
      <Teleport to="body">
        <ul
          class={ctx?.slots.value.menu()}
          data-open={dataAttr(ctx?.isMenuOpen.value)}
          style={{
            '--navbar-height': ctx?.height,
            paddingTop: ctx?.isMenuOpen.value ? '0.5rem' : '0',
            height: ctx?.isMenuOpen.value ? 'calc(100vh - var(--navbar-height) - 1px)' : '0',
            overflow: 'hidden',
            transitionDuration: '300ms'
          }}
        >
          <div>
            {slots.default?.()}
          </div>
        </ul>
      </Teleport>
    )
  }
})

export { NavbarMenu }
