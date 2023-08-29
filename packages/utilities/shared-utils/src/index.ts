type Booleanish = boolean | 'true' | 'false';

export * from './clsx'
export const dataAttr = (condition: boolean | undefined) => (condition ? 'true' : undefined) as Booleanish
