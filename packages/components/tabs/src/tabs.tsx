import { computed, defineComponent, provide, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { pickChildren } from '@echoui/vue-utils'
import { Tab } from './tab'
import { useTabs, type UseTabsProps } from './use-tabs'
import { TabPanel } from './tab-panel'

export type TabsProps = UseTabsProps

const props = {
  selectedKey: { type: String, default: undefined },
  defaultSelectedKey: { type: String, default: undefined },
  disableAnimation: Boolean,
  disableCursorAnimation: Boolean,
  isDisabled: Boolean
}

const isUndefined = (value: any): value is undefined => typeof value === 'undefined'

const Tabs = defineComponent({
  props,

  setup (props, { emit, slots }) {
    const selectedKey = isUndefined(props.selectedKey) ? ref(props.defaultSelectedKey) : useVModel(props, 'selectedKey', emit)
    const selectedItem = ref()
    const tabsRef = ref()
    const { Component, values, getBaseProps, getTabListProps } = useTabs(props)

    const layoutGroupEnabled = computed(() => !props.disableAnimation && !props.disableCursorAnimation)

    provide('context', { tabsRef })

    const onClick = (key: string) => () => {
      selectedKey.value = key
    }

    const tabs = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, tabs] = pickChildren(slots.default?.(), Tab)
      if (!tabs) { return tabs }
      return tabs.map((tab) => {
        const isSelected = selectedKey.value === tab.props.key
        if (isSelected) { selectedItem.value = tab?.children }
        return <Tab isSelected={isSelected} onClick={onClick(tab.props.key)} {...tab.props} {...values.value} />
      })
    })

    return () => (
      <div>
        <div ref={tabsRef} {...getBaseProps.value}>
          <Component {...getTabListProps.value}>
            {layoutGroupEnabled.value ? tabs.value : tabs.value}
          </Component>
        </div>

        <TabPanel key={selectedKey.value} {...values.value}>
          {selectedItem.value?.default?.()}
        </TabPanel>
      </div>
    )
  }
})

export { Tabs }
