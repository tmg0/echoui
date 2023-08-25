export type UseButtonProps = {
  variant: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size: 'sm' | 'md' | 'lg'
}

export const useButton = (_props: UseButtonProps) => {
  const Component = 'button'

  return { Component }
}
