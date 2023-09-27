import { type HTMLEchoUIProps } from '@echoui/system'
import type { CheckboxProps } from './checkbox'

export interface UseCheckboxProps extends HTMLEchoUIProps<'label'>, CheckboxProps {}

export const useCheckbox = (props: UseCheckboxProps) => {
  const Component = props.as || 'label'

  return { Component }
}
