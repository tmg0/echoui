import { defineComponent } from 'vue'
import type { HTMLEchoUIProps } from '@echoui/system'
import { dataAttr } from '@echoui/shared-utils'
import { useNavbarContext } from './navbar-context'

export interface NavbarItemProps extends HTMLEchoUIProps {
  isActive?: boolean
}

const props = {
  isActive: { type: Boolean, default: false }
}

const NavbarItem = defineComponent({
  props,

  setup (props, { slots }) {
    const ctx = useNavbarContext()

    return () => (
      <li class={ctx?.slots.value.item?.()} data-active={dataAttr(props.isActive)}>
        {slots.default?.()}
      </li>
    )
  }
})

export { NavbarItem }
