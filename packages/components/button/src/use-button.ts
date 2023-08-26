import { type HTMLEchoUIProps } from '@echo-ui/system'

interface Props extends HTMLEchoUIProps {
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export type UseButtonProps = Props

export const useButton = (_props: UseButtonProps) => {
  const Component = 'button'

  return { Component }
}
