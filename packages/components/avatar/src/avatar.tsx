import { defineComponent } from 'vue'
import { useAvatar } from './use-avatar'

const Avatar = defineComponent({
  setup () {
    const { Component } = useAvatar()

    return () => (
      <Component>

      </Component>
    )
  }
})

export { Avatar }
