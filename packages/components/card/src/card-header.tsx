import { clsx } from '@echoui/shared-utils'
import type { HTMLEchoUIProps } from '@echoui/system'
import { computed, defineComponent, type PropType } from 'vue'
import { useCardContext } from './card-context'

interface CardHeaderProps extends HTMLEchoUIProps<'div'> { }

const props = {
  as: { type: String as PropType<CardHeaderProps['as']>, default: undefined }
}

const CardHeader = defineComponent({
  props,

  setup (props, { slots, attrs }) {
    const { as } = props
    const ctx = useCardContext()
    const Component = as || 'div'

    const headerStyles = computed(() => clsx(attrs.class))

    const getCardHeaderProps = computed(() => ({
      class: ctx?.slots.value.header?.({ class: headerStyles.value })
    }))

    return () => (
      <Component {...getCardHeaderProps.value}>
        {slots.default?.()}
      </Component>
    )
  }
})

export { CardHeader }
