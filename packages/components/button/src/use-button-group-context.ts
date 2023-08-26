import { defineComponent, inject, provide } from 'vue'

const ButtonGroupProvider = defineComponent({
  setup () {
    provide('isInGroup', true)
  }
})

export const useButtonGroupContext = () => {
  return inject('isInGroup', false)
}

export default ButtonGroupProvider
