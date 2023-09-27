import { defineComponent } from 'vue'

const VisuallyHidden = defineComponent({
  setup (_, { slots }) {
    return () => {
      <div style={{
        position: 'absolute',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        margin: 0,
        padding: 0,
        height: '1px',
        width: '1px',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(100%)'
      }}>
        {slots.default?.()}
      </div>
    }
  }
})

export { VisuallyHidden }
