import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'

import { CheckboxContainer, CheckboxIndicator } from './styles'

interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {}

const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'

export { type CheckboxProps, Checkbox }
