import { defineComponent, ref, type PropType, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import type { RippleType, UseRippleProps } from './use-ripple'

export interface RippleProps extends UseRippleProps {
  ripples: RippleType[];
  color?: string;
}

const props = {
  removeAfter: {
    type: Number as PropType<RippleProps['removeAfter']>,
    default: 500
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

const RippleItem = defineComponent({
  props: ['color', 'y', 'x', 'size'],

  setup (props) {
    const target = ref()

    const duration = clamp(0.01 * props.size, 0.2, props.size > 100 ? 0.75 : 0.5) * 1000

    onMounted(() => {
      useMotion(target, {
        initial: { transform: 'scale(0)', opacity: 0.35 },
        enter: { transform: 'scale(2)', opacity: 0, transition: { duration } },
        leave: { opacity: 0 }
      })
    })

    return () => (
      <span
        ref={target}
        style={{
          position: 'absolute',
          backgroundColor: props.color,
          borderRadius: '100%',
          transformOrigin: 'center',
          pointerEvents: 'none',
          zIndex: 10,
          top: `${props.y}px`,
          left: `${props.x}px`,
          width: `${props.size}px`,
          height: `${props.size}px`
        }}
      />
    )
  }
})

const Ripple = defineComponent({
  props,

  setup (props) {
    return () => (
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        {props.ripples.map(ripple => <RippleItem x={ripple.x} y={ripple.y} size={ripple.size} color={props.color} />)}
      </div>
    )
  }
})

export { Ripple }
