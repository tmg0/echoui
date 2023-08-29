import { defineComponent, provide, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { useNavbar, type UseNavbarProps } from './use-navbar'

export interface NavbarProps extends Omit<UseNavbarProps, 'isMenuOpen'> {
  isMenuDefaultOpen?: boolean
}

const props = {
  height: Number,
  isMenuOpen: { type: Boolean, default: undefined },
  isMenuDefaultOpen: { type: Boolean, default: false }
}

const isUndefined = (value: any): value is undefined => typeof value === 'undefined'

const Navbar = defineComponent({
  props,
  setup (props, { emit, slots }) {
    const isMenuOpen = isUndefined(props.isMenuOpen) ? ref(props.isMenuDefaultOpen ?? false) : useVModel(props, 'isMenuOpen', emit)
    const context = useNavbar({ ...props, isMenuOpen })
    const Component = context.Component

    provide('context', context)

    const content = (
      <>
        <header {...context.getWrapperProps.value}>{slots.default?.()}</header>
        {slots.navbarMenu?.()}
      </>
    )

    return () => <Component>{content}</Component>
  }
})

export { Navbar }
