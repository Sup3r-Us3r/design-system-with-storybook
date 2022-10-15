import { Slot } from '@radix-ui/react-slot'

import { styled } from '../../styles'

const TextInputRoot = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$gray900',
  padding: '$3 $4',
  height: '$12',
  gap: '$2',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

const TextInputIcon = styled(Slot, {
  height: '$6',
  width: '$6',
  color: '$gray400',
})

const Input = styled('input', {
  flex: 1,
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  background: 'transparent',
  border: 0,

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export { TextInputRoot, TextInputIcon, Input }
