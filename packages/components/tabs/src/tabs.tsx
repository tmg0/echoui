import { computed, defineComponent, provide, ref, type PropType } from 'vue'
import { useVModel } from '@vueuse/core'
import { pickChildren } from '@echoui/vue-utils'
import { Tab } from './tab'
import { useTabs, type UseTabsProps } from './use-tabs'
import { TabPanel } from './tab-panel'

export type TabsProps = UseTabsProps

const props = {
  selectedKey: { type: String, default: undefined },
  defaultSelectedKey: { type: String, default: undefined },
  disabledKeys: { type: Array as PropType<string[]>, default: undefined },
  disableAnimation: Boolean,
  disableCursorAnimation: Boolean,
  isDisabled: Boolean,
  variant: { type: String as PropType<UseTabsProps['variant']>, default: undefined },
  color: { type: String as PropType<UseTabsProps['color']>, default: undefined },
  size: { type: String as PropType<UseTabsProps['size']>, default: undefined },
  radius: { type: String as PropType<UseTabsProps['radius']>, default: undefined }
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

    provide('context', { tabsRef, sharedCursor: ref({}) })

    const onClick = (key: string) => () => {
      selectedKey.value = key
    }

    const tabs = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, tabs] = pickChildren(slots.default?.(), Tab)
      if (!tabs) { return tabs }
      return tabs.map((tab) => {
        const isSelected = selectedKey.value === tab.props.key
        const isDisabled = tab.props.isDisabled ?? props.disabledKeys?.includes(tab.props.key) ?? false
        if (isSelected) { selectedItem.value = tab?.children }
        return <Tab isSelected={isSelected} onClick={onClick(tab.props.key)} {...values.value} {...tab.props} isDisabled={isDisabled}/>
      })
    })

    return () => (
      <>
        <div ref={tabsRef} {...getBaseProps.value}>
          <Component {...getTabListProps.value}>
            {layoutGroupEnabled.value ? tabs.value : tabs.value}
          </Component>
        </div>

        {selectedItem.value?.default && <TabPanel key={selectedKey.value} {...values.value}>
          {selectedItem.value?.default?.()}
        </TabPanel>}
      </>
    )
  }
})

export { Tabs }
