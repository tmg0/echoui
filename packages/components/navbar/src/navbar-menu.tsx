import { defineComponent } from 'vue'

const NavbarMenu = defineComponent({
  name: 'EchoNavbarMenu',
  setup (_, { slots }) {
    return () => <div>{slots.default?.()}</div>
  }
})

export { NavbarMenu }
