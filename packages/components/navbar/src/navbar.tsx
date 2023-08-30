import { defineComponent, provide, ref, type PropType } from 'vue'
import { useVModel } from '@vueuse/core'
import { pickChildren } from '@echoui/vue-utils'
import { useNavbar, type UseNavbarProps } from './use-navbar'
import { NavbarMenu } from './navbar-menu'

export interface NavbarProps extends Omit<UseNavbarProps, 'isMenuOpen'> {
  isMenuDefaultOpen?: boolean
}

const props = {
  height: Number,
  position: { type: String as PropType<NavbarProps['position']>, default: 'sticky' },
  shouldHideOnScroll: Boolean,
  maxWidth: { type: String as PropType<NavbarProps['maxWidth']>, default: undefined },
  isMenuOpen: { type: Boolean, default: undefined },
  isMenuDefaultOpen: { type: Boolean, default: false }
}

const isUndefined = (value: any): value is undefined => typeof value === 'undefined'

const Navbar = defineComponent({
  props,
  setup (props, { emit, slots }) {
    const isMenuOpen = isUndefined(props.isMenuOpen) ? ref(props.isMenuDefaultOpen ?? false) : useVModel(props, 'isMenuOpen', emit)
    const context = useNavbar({ ...props, isMenuOpen })

    provide('context', context)

    const [childrenWithoutMenu, menu] = pickChildren(slots.default?.(), NavbarMenu)

    const content = (
      <>
        <header {...context.getWrapperProps.value}>{childrenWithoutMenu}</header>
        {menu}
      </>
    )

    return () => <nav {...context.getBaseProps.value}>{content}</nav>
  }
})

export { Navbar }
