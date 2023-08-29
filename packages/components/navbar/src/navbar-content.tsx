import { defineComponent } from 'vue'
import type { HTMLEchoUIProps } from '@echoui/system'
import { useNavbarContext } from './navbar-context'

export interface NavbarContentProps extends HTMLEchoUIProps {
  justify?: 'start' | 'end' | 'center'
}

const props = {
  justify: { type: String, default: 'start' }
}

const NavbarContent = defineComponent({
  props,

  setup (props, { slots }) {
    const ctx = useNavbarContext()

    return () => (
      <div class={ctx?.slots.value.content?.()} data-justify={props.justify}>
        {slots.default?.()}
      </div>
    )
  }
})

export { NavbarContent }
