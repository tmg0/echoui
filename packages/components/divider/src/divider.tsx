import { defineComponent, type PropType } from 'vue'
import { useDivider, type UseDividerProps } from './use-divider'

export type DividerProps = UseDividerProps

const props = {
  orientation: { type: String as PropType<DividerProps['orientation']>, default: 'horizontal' }
}

export const Divider = defineComponent({
  props,

  setup (props) {
    const { Component, getDividerProps } = useDivider({ ...props })

    return () => <Component {...getDividerProps.value} />
  }
})
