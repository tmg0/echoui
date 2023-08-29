import { defineComponent } from 'vue'
import { useChip } from './use-chip'

const Chip = defineComponent({
  setup (props, ctx) {
    const { slots, getChipProps } = useChip(props)

    return () => (
      <div {...getChipProps.value}>
        <span class={slots.value.content?.()}>{ctx.slots.default?.()}</span>
      </div>
    )
  }
})

export { Chip }
