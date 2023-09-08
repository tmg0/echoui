export const modules = import.meta.glob('~/components/content/**/*.vue')
export const codes = import.meta.glob('~/components/content/**/*.vue', { as: 'raw', eager: true })
