import { InputHTMLAttributes, ReactElement, ReactNode } from 'react'

import { TextInputRoot, TextInputIcon, Input } from './styles'

interface TextInputRootProps {
  children: ReactNode
}

const TextInputRootComponent = ({ children }: TextInputRootProps) => {
  return <TextInputRoot>{children}</TextInputRoot>
}

TextInputRootComponent.displayName = 'TextInput.Root'

interface TextInputIconProps {
  children: ReactElement
}

const TextInputIconComponent = ({ children }: TextInputIconProps) => {
  return <TextInputIcon>{children}</TextInputIcon>
}

TextInputIconComponent.displayName = 'TextInput.Icon'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputComponent = (props: TextInputProps) => {
  return <Input {...props} />
}

TextInputComponent.displayName = 'TextInput.Input'

export { type TextInputRootProps }

export const TextInput2 = {
  Root: TextInputRootComponent,
  Icon: TextInputIconComponent,
  Input: TextInputComponent,
}
