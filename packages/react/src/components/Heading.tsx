import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$short',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

Heading.displayName = 'Heading'

interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

export { type HeadingProps, Heading }
