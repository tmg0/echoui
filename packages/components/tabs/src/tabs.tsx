import { computed, defineComponent, useSlots } from 'vue'
import { pickChildren } from '@echoui/vue-utils'
import { Tab } from './tab'
import { useTabs, type UseTabsProps } from './use-tabs'

export type TabsProps = UseTabsProps

const props = {
  disableAnimation: Boolean,
  disableCursorAnimation: Boolean,
  isDisabled: Boolean,
  isSelected: Boolean
}

const Tabs = defineComponent({
  props,

  setup (props) {
    const slots = useSlots()
    const { Component, values, getBaseProps, getTabListProps } = useTabs(props)

    const layoutGroupEnabled = computed(() => !props.disableAnimation && !props.disableCursorAnimation)

    const tabs = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, tabs] = pickChildren(slots.default?.(), Tab)
      if (!tabs) { return tabs }
      return tabs.map(({ props }) => <Tab {...props} {...values.value} />)
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
