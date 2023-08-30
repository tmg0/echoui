import { defineComponent, useAttrs } from 'vue'
import { clsx, dataAttr } from '@echoui/shared-utils'
import { useNavbarContext } from './navbar-context'

const NavbarMenuItem = defineComponent({
  setup (_, { slots }) {
    const { class: className } = useAttrs()
    const ctx = useNavbarContext()
    const styles = clsx(className)

    return () => (
      <li
        class={ctx?.slots.value.menuItem({ class: styles })}
        data-open={dataAttr(ctx?.isMenuOpen.value)}
      >
        {slots.default?.()}
      </li>
    )
  }
})

export { NavbarMenuItem }
