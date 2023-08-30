import type { HTMLEchoUIProps } from '@echoui/system'
import { defineComponent, useAttrs, type PropType } from 'vue'
import { clsx } from '@echoui/shared-utils'
import { useNavbarContext } from './navbar-context'

interface Props extends HTMLEchoUIProps<'button'> {
  srOnlyText?: string
  onChange?: (state: boolean) => void
}

export type NavbarMenuToggleProps = Props

const props = {
  as: { type: String as PropType<NavbarMenuToggleProps['as']>, default: undefined },
  srOnlyText: { type: String as PropType<NavbarMenuToggleProps['srOnlyText']>, default: undefined },
  onChange: { type: Function as PropType<NavbarMenuToggleProps['onChange']>, default: undefined }
}

const NavbarMenuToggle = defineComponent({
  props,

  setup (props, { slots }) {
    const { class: className } = useAttrs()
    const { as, onChange } = props
    const Component = as || 'button'
    const ctx = useNavbarContext()

    const toggleStyles = clsx(className)

    const onClick = () => {
      if (!ctx?.isMenuOpen) { return }
      ctx.isMenuOpen.value = !ctx.isMenuOpen.value
      onChange?.(ctx.isMenuOpen.value)
    }

    return () => (
      <Component
        class={ctx?.slots.value.toggle({ class: toggleStyles })}
        onClick={onClick}
      >
        { slots.default?.() }
      </Component>
    )
  }
})

export { NavbarMenuToggle }
