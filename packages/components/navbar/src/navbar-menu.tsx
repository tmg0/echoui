import { defineComponent, ref, Teleport } from 'vue'
import { useMotion } from '@vueuse/motion'
import type { HTMLEchoUIProps } from '@echoui/system'
import { dataAttr } from '@echoui/shared-utils'
import { useNavbarContext } from './navbar-context'

export interface NavbarMenuProps extends HTMLEchoUIProps<'ul'> { }

const NavbarMenu = defineComponent({
  name: 'EchoNavbarMenu',

  setup (_, { slots }) {
    const domRef = ref()
    const ctx = useNavbarContext()

    useMotion(domRef, {
      initial: {
        height: 0,
        transition: {
          duration: 0.25,
          easings: 'easeIn'
        }
      },
      enter: {
        height: 'calc(100vh - var(--navbar-height) - 1px)',
        transition: {
          delay: 500,
          duration: 0.3,
          easings: 'easeOut'
        }
      }
    })

    return () => (
      <Teleport to="body">
        {ctx?.isMenuOpen.value && <ul
          ref={domRef}
          class={ctx?.slots.value.menu()}
          data-open={dataAttr(ctx?.isMenuOpen.value)}
          style={{ '--navbar-height': ctx?.height }}
        >
          {slots.default?.()}
        </ul>}
      </Teleport>
    )
  }
})

export { NavbarMenu }
