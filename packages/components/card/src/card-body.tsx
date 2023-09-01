import type { HTMLEchoUIProps } from '@echoui/system'
import { defineComponent, type PropType } from 'vue'
import { useCardContext } from './card-context'

interface CardBodyProps extends HTMLEchoUIProps<'div'> { }

const props = {
  as: { type: String as PropType<CardBodyProps['as']>, default: undefined }
}

const CardBody = defineComponent({
  props,

  setup (props, { slots }) {
    const { as } = props
    const Component = as || 'div'
    const ctx = useCardContext()

    return () => (
      <Component class={ctx?.value.slots.value.body?.()}>
        {slots.default?.()}
      </Component>
    )
  }
})

export { CardBody }
