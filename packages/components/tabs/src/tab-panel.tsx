import type { HTMLEchoUIProps } from '@echoui/system'
import { defineComponent, type PropType } from 'vue'
import type { ValuesType } from './use-tabs'

export interface TanPanelProps extends HTMLEchoUIProps<'div'> {
  key?: string
  slots?: ValuesType['slots']
}

const props = {
  as: String as PropType<TanPanelProps['as']>,
  slots: { type: Object as PropType<any>, default: undefined }
}

export const TabPanel = defineComponent({
  props,

  setup (props, { slots }) {
    const { as } = props
    const Component = as || 'div'

    return () => (
      <Component class={props.slots.panel?.()} data-slot="panel">
        {slots.default?.()}
      </Component>
    )
  }
})
