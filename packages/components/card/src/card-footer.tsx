import type { HTMLEchoUIProps } from '@echoui/system'
import { computed, defineComponent, type PropType } from 'vue'
import { useCardContext } from './card-context'

interface CardFooterProps extends HTMLEchoUIProps<'div'> { }

const props = {
  as: { type: String as PropType<CardFooterProps['as']>, default: undefined }
}

const CardFooter = defineComponent({
  props,

  setup (props, { slots }) {
    const { as } = props
    const ctx = useCardContext()
    const Component = as || 'div'

    const getCardFooterProps = computed(() => ({
      class: ctx?.slots.value.footer?.()
    }))

    return () => (
      <Component {...getCardFooterProps.value}>
        {slots.default?.()}
      </Component>
    )
  }
})

export { CardFooter }
