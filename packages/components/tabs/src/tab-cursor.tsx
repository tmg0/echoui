import { defineComponent, ref, type PropType, onBeforeUnmount, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import { useElementBounding } from '@vueuse/core'
import { useTabsContext } from './use-tabs-context'

const props = {
  slots: { type: Object as PropType<any>, default: undefined }
}

const TabCursor = defineComponent({
  props,

  setup (props) {
    let x = 0
    let width = 0
    const domRef = ref<HTMLElement>()
    const { sharedCursor } = useTabsContext()
    const rect = useElementBounding(domRef)

    onMounted(() => {
      x = rect.x.value
      width = rect.width.value

      let _x = 0
      if (sharedCursor.value.x) {
        _x = sharedCursor.value.x - rect.x.value
      }

      useMotion(domRef, {
        initial: { x: `${_x}px`, width: `${sharedCursor.value.width}px` },
        enter: { x: 0, width: `${width}px`, transition: { type: 'spring', bounce: 0.15, duration: 500 } }
      })
    })

    onBeforeUnmount(() => {
      sharedCursor.value.x = x
      sharedCursor.value.width = width
    })

    return () => (
      <span
        ref={domRef}
        data-slot="cursor"
        class={props.slots?.cursor()}
      />
    )
  }
})

export { TabCursor }
