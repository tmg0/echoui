import { defineComponent, type PropType, provide, type ExtractPropTypes } from 'vue'
import { useButtonGroup } from './use-button-group'

const props = {
  variant: { type: String as PropType<'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'>, default: 'solid' },
  color: { type: String as PropType<'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'>, default: 'default' },
  size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
  radius: { type: String as PropType<'none' | 'sm' | 'md' | 'lg' | 'full'>, default: 'xl' },
  fullWidth: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: undefined }
}

export type ButtonGroupProps = ExtractPropTypes<typeof props>

const ButtonGroup = defineComponent({
  props,

  setup (props, { slots }) {
    const { styles, context } = useButtonGroup(props)

    provide('context', context)

    return () => (
      <div class={styles.value}>
        {slots.default?.()}
      </div>
    )
  }
})

export default ButtonGroup
