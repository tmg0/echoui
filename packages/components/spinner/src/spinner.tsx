import { defineComponent, type PropType } from 'vue'
import { useSpinner, type UseSpinnerProps } from './use-spinner'

export interface SpinnerProps extends UseSpinnerProps { }

const props = {
  color: String as PropType<SpinnerProps['color']>,
  size: String as PropType<SpinnerProps['size']>
}

const Spinner = defineComponent({
  props,

  setup (props) {
    const { slots, label } = useSpinner({ ...props })

    return () => (
      <div>
        <div class={slots.value.wrapper()}>
          <i class={slots.value.circle1()} />
          <i class={slots.value.circle2()} />
        </div>
        {label && <span class={slots.value.label()}>{label}</span>}
      </div>
    )
  }
})

export { Spinner }
