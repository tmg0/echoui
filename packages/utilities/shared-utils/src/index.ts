type Booleanish = boolean | 'true' | 'false';

export const dataAttr = (condition: boolean | undefined) => (condition ? 'true' : undefined) as Booleanish
