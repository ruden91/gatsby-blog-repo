import { css } from 'styled-components'
const sizes = {
  desktop: 1461,
  tablet: 1090,
  phone: 468,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})
export const Clearfix = () => `
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`

export const TextOverflow = () => `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
