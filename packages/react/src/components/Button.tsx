import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

const Button = styled('button', {
  all: 'unset',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  borderRadius: '$sm',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite700',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray.100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        padding: '0 $4',
        height: 38,
      },

      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

Button.displayName = 'Button'

interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

export { type ButtonProps, Button }
