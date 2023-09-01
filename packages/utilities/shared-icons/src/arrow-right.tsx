import type { IconSvgProps } from './types'

export const ArrowRightIcon = ({ strokeWidth = 1.5, ...otherProps }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...otherProps}
  >
    <path
      d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width={strokeWidth}
    />
    <path
      d="M4.08325 14H23.7183"
      stroke="currentColor"
      stroke-inecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width={strokeWidth}
    />
  </svg>
)
