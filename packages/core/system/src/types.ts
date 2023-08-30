export type As = 'div' | 'span' | 'button' | 'a' | 'li' | 'nav' | 'label'

export type HTMLEchoUIProps<T extends As> = {
  as?: T
}
