import { inject, ref, type Ref } from 'vue'

export interface TabsContext {
  tabsRef: Ref<HTMLElement | undefined>
}

const defaultCtx = {
  tabsRef: ref()
}

export const useTabsContext = () => {
  return inject<TabsContext>('context', defaultCtx)
}
