import type { HTMLEchoUIProps } from '@echoui/system'
import { useMousePressed } from '@vueuse/core'
import { useMotion } from '@vueuse/motion'
import { defineComponent, ref, type PropType, computed } from 'vue'
import { dataAttr } from '@echoui/shared-utils'
import type { ValuesType } from './use-tabs'

export interface TabProps extends HTMLEchoUIProps<'button'> {
  key?: string
  title?: string
  slots?: ValuesType['slots']
  disableCursorAnimation?: ValuesType['disableCursorAnimation']
  disableAnimation?: ValuesType['disableAnimation']
  isDisabled?: ValuesType['isDisabled']
  isSelected?: ValuesType['isSelected']
  onClick?: () => void
}

const props = {
  as: { type: String as PropType<'as'>, default: undefined },
  key: String,
  slots: { type: Object as PropType<any>, default: undefined },
  title: String,
  disableCursorAnimation: Boolean,
  disableAnimation: Boolean,
  isDisabled: Boolean,
  isSelected: Boolean,
  onClick: Function as PropType<TabProps['onClick']>
}

const Tab = defineComponent({
  name: 'EchoTab',
  props,

  setup (props) {
    const domRef = ref<HTMLElement>()
    const montionRef = ref()
    const Component = props.as || 'button'

    const { pressed: isPressed } = useMousePressed({ target: domRef })
    const isMotion = computed(() => props.isSelected && !props.disableAnimation && !props.disableCursorAnimation)

    const handleClick = () => {
      props.onClick?.()
      if (!domRef.value) { return }
      domRef.value.scrollIntoView()
    }

    useMotion(montionRef, {
      initial: {},
      enter: { transition: { type: 'spring', bounce: 0.15, duration: 500 } }
    })

    return () => (
      <Component
        ref={domRef}
        data-disabled={dataAttr(props.isDisabled)}
        data-pressed={dataAttr(isPressed.value)}
        data-selected={dataAttr(props.isSelected)}
        data-slot="tab"
        class={props.slots?.tab?.()}
        onClick={handleClick}
      >
        <div
          class={props.slots?.tabContent()}
          data-slot="tabContent"
        >
          {isMotion.value && <span ref="montionRef" class={props.slots?.cursor()} />}
          {props.title}
        </div>
      </Component>
    )
  }
})

export { Tab }
