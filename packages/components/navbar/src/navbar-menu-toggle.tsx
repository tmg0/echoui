import type { HTMLEchoUIProps } from '@echoui/system'
import { defineComponent, useAttrs, type PropType, computed } from 'vue'
import { clsx, dataAttr } from '@echoui/shared-utils'
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
    const { as, srOnlyText: srOnlyTextProp, onChange } = props
    const Component = as || 'button'
    const ctx = useNavbarContext()

    const toggleStyles = clsx(className)

    const srOnlyText = computed(() => {
      if (srOnlyTextProp) {
        return srOnlyTextProp
      }

      return ctx?.isMenuOpen.value ? 'close navigation menu' : 'open navigation menu'
    })

    const onClick = () => {
      if (!ctx?.isMenuOpen) { return }
      ctx.isMenuOpen.value = !ctx.isMenuOpen.value
      onChange?.(ctx.isMenuOpen.value)
    }

    return () => (
      <Component
        class={ctx?.slots.value.toggle({ class: toggleStyles })}
        data-open={dataAttr(ctx?.isMenuOpen.value)}
        onClick={onClick}
      >
        <span class={ctx?.slots.value.srOnly()}>{srOnlyText}</span>
        <span class={ctx?.slots.value.toggleIcon()} />
      </Component>
    )
  }
})

export { NavbarMenuToggle }
