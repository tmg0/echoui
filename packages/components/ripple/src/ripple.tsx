import { defineComponent, nextTick, ref, type PropType, watch } from 'vue'
import { useMotion } from '@vueuse/motion'
import type { RippleType, UseRippleProps } from './use-ripple'

export interface RippleProps extends UseRippleProps {
  ripples: RippleType[];
  color?: string;
}

const props = {
  removeAfter: {
    type: Number as PropType<RippleProps['removeAfter']>,
    default: 1000
  },
  ripples: {
    type: Array as PropType<RippleProps['ripples']>,
    default: () => []
  },
  color: {
    type: String,
    default: 'currentColor'
  }
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const Ripple = defineComponent({
  props,

  setup (props) {
    const refs = ref()

    watch(() => props.ripples, async () => {
      await nextTick()
      const targets = [refs.value].flat()
      targets.forEach((target, index) => {
        const ripple = props.ripples[index]
        if (!ripple) { return }
        const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5) * 1000
        useMotion(target, {
          initial: { transform: 'scale(0)', opacity: 0.35 },
          enter: { transform: 'scale(2)', opacity: 0, transition: { duration } },
          exit: { opacity: 0 }
        })
      })
    })

    return () => props.ripples.length > 0 && (
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        {props.ripples.map((ripple) => {
          return (
            <span
              ref={refs}
              style={{
                position: 'absolute',
                backgroundColor: props.color,
                borderRadius: '100%',
                transformOrigin: 'center',
                pointerEvents: 'none',
                zIndex: 10,
                top: ripple.y,
                left: ripple.x,
                width: `${ripple.size}px`,
                height: `${ripple.size}px`
              }}
            />
          )
        })}
      </div>
    )
  }
})

export { Ripple }
