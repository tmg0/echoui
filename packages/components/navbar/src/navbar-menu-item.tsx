import { computed, defineComponent, useAttrs } from 'vue'
import { clsx, dataAttr } from '@echoui/shared-utils'
import { useNavbarContext } from './navbar-context'

const NavbarMenuItem = defineComponent({
  setup (_, { slots }) {
    const attrs = useAttrs()
    const ctx = useNavbarContext()
    const styles = computed(() => clsx(attrs.class))

    return () => (
      <li
        class={ctx?.slots.value.menuItem({ class: styles.value })}
        data-open={dataAttr(ctx?.isMenuOpen.value)}
      >
        {slots.default?.()}
      </li>
    )
  }
})

export { NavbarMenuItem }
