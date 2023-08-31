import { defineComponent, ref, type PropType } from 'vue'
import { useMotion } from '@vueuse/motion'

const props = {
  slots: { type: Object as PropType<any>, default: undefined }
}

const TabCursor = defineComponent({
  props,

  setup (props) {
    const domRef = ref<HTMLElement>()

    const isToRight = !document.querySelector('#tab-cursor')

    useMotion(domRef, {
      initial: { x: isToRight ? '-50%' : '50%' },
      enter: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 0.15, duration: 500 } },
      leave: { opacity: 0, x: isToRight ? '50%' : '-50%', transition: { type: 'spring', bounce: 0.15, duration: 500 } }
    })

    return () => (
      <span
        ref={domRef}
        id="tab-cursor"
        data-slot="cursor"
        class={props.slots?.cursor()}
      />
    )
  }
})

export { TabCursor }
