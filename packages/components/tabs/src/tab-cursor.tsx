import { defineComponent, ref, type PropType, onBeforeUnmount, onMounted, nextTick } from 'vue'
import { useMotion } from '@vueuse/motion'
import { useElementBounding } from '@vueuse/core'
import { useTabsContext } from './use-tabs-context'

const props = {
  slots: { type: Object as PropType<any>, default: undefined }
}

const TabCursor = defineComponent({
  props,

  setup (props) {
    const domRef = ref<HTMLElement>()
    const { tabsRef, sharedCursor } = useTabsContext()
    const rect = useElementBounding(domRef)

    const isToRight = !tabsRef.value?.querySelector('#tab-cursor')

    onMounted(async () => {
      let _x = 0
      if (sharedCursor.value.x) {
        _x = sharedCursor.value.x - rect.x.value
      }
      await nextTick()
      useMotion(domRef, {
        initial: { x: `${_x}px` },
        enter: { x: 0, transition: { type: 'spring', bounce: 0.15, duration: 500 } }
      })
    })

    onBeforeUnmount(() => {
      sharedCursor.value.x = rect.x.value
      sharedCursor.value.y = rect.y.value
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
