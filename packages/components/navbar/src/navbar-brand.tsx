import { defineComponent } from 'vue'
import type { HTMLEchoUIProps } from '@echoui/system'
import { useNavbarContext } from './navbar-context'

export interface NavbarBrandProps extends HTMLEchoUIProps<'div'> { }

const NavbarBrand = defineComponent({
  setup (_, { slots }) {
    const ctx = useNavbarContext()

    return () => (
      <div class={ctx?.slots.value.brand?.()}>
        {slots.default?.()}
      </div>
    )
  }
})

export { NavbarBrand }
