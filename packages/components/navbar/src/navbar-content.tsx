import { defineComponent, type PropType } from 'vue'
import type { HTMLEchoUIProps } from '@echoui/system'
import { useNavbarContext } from './navbar-context'

export interface NavbarContentProps extends HTMLEchoUIProps<'div'> {
  justify?: 'start' | 'end' | 'center'
}

const props = {
  as: { type: Object as PropType<NavbarContentProps['as']>, default: undefined },
  justify: { type: String, default: 'start' }
}

const NavbarContent = defineComponent({
  props,

  setup (props, { slots }) {
    const { as } = props
    const Component = as || 'div'
    const ctx = useNavbarContext()

    return () => (
      <Component class={ctx?.slots.value.content?.()} data-justify={props.justify}>
        {slots.default?.()}
      </Component>
    )
  }
})

export { NavbarContent }
