import type { ChipVariantProps } from '@nextui-org/theme'
import type { HTMLEchoUIProps } from '@echoui/system'
import { chip } from '@nextui-org/theme'
import { computed } from 'vue'

export interface UseChipProps extends HTMLEchoUIProps, ChipVariantProps { }

export const useChip = (props: UseChipProps) => {
  const slots = computed<Record<string, any>>(() => chip(props))

  const getChipProps = computed(() => ({
    class: slots.value.base()
  }))

  return { slots, getChipProps }
}
