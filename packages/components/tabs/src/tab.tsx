import type { HTMLEchoUIProps } from '@echoui/system'
import { useMousePressed } from '@vueuse/core'
import { defineComponent, ref, type PropType, computed } from 'vue'
import { dataAttr } from '@echoui/shared-utils'
import type { ValuesType } from './use-tabs'
import { TabCursor } from './tab-cursor'

export interface TabProps extends HTMLEchoUIProps<'button'> {
  key?: string
  title?: string
  slots?: ValuesType['slots']
  disableCursorAnimation?: ValuesType['disableCursorAnimation']
  disableAnimation?: ValuesType['disableAnimation']
  isDisabled?: ValuesType['isDisabled']
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
    const Component = props.as || 'button'

    const { pressed: isPressed } = useMousePressed({ target: domRef })
    const isMotion = computed(() => props.isSelected && !props.disableAnimation && !props.disableCursorAnimation)

    const onClick = () => {
      if (props.isDisabled) { return }
      props.onClick?.()
      if (!domRef.value) { return }
      domRef.value.scrollIntoView()
    }

    return () => (
      <Component
        ref={domRef}
        data-disabled={dataAttr(props.isDisabled)}
        data-pressed={dataAttr(isPressed.value)}
        data-selected={dataAttr(props.isSelected)}
        data-slot="tab"
        class={props.slots?.tab?.()}
        onClick={onClick}
      >
        {isMotion.value && <TabCursor slots={props.slots} />}

        <div
          class={props.slots?.tabContent()}
          data-slot="tabContent"
        >
          {props.title}
        </div>
      </Component>
    )
  }
})

export { Tab }
