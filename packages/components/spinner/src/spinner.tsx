import { defineComponent } from 'vue'
import { useSpinner } from './use-spinner'

const Spinner = defineComponent({
  setup (props) {
    const { slots, label } = useSpinner({ ...props })

    return (
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
