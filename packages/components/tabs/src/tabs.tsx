import { computed, defineComponent, ref, useSlots } from 'vue'
import { useVModel } from '@vueuse/core'
import { pickChildren } from '@echoui/vue-utils'
import { Tab } from './tab'
import { useTabs, type UseTabsProps } from './use-tabs'

export type TabsProps = UseTabsProps

const props = {
  selectedKey: { type: String, default: undefined },
  defaultSelectedKey: { type: String, default: undefined },
  disableAnimation: Boolean,
  disableCursorAnimation: Boolean,
  isDisabled: Boolean,
  isSelected: Boolean
}

const isUndefined = (value: any): value is undefined => typeof value === 'undefined'

const Tabs = defineComponent({
  props,

  setup (props, { emit }) {
    const selectedKey = isUndefined(props.selectedKey) ? ref(props.defaultSelectedKey ?? false) : useVModel(props, 'selectedKey', emit)
    const slots = useSlots()
    const { Component, values, getBaseProps, getTabListProps } = useTabs(props)

    const layoutGroupEnabled = computed(() => !props.disableAnimation && !props.disableCursorAnimation)

    const onClick = (key: string) => () => {
      selectedKey.value = key
    }

    const tabs = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, tabs] = pickChildren(slots.default?.(), Tab)
      if (!tabs) { return tabs }
      return tabs.map(({ props }) => {
        return <Tab isSelected={selectedKey.value === props.key} onClick={onClick(props.key)} {...props} {...values.value} />
      })
    })

    return () => (
      <div>
        <div {...getBaseProps.value}>
          <Component {...getTabListProps.value}>
            {layoutGroupEnabled.value ? tabs.value : tabs.value}
          </Component>
        </div>

      </div>
    )
  }
})

export { Tabs }
