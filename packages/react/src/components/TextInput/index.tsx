import { ComponentProps } from 'react'

import { Input, Prefix, TextInputContainer } from './styles'

interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

const TextInput = ({ prefix, ...rest }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...rest} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'

export { type TextInputProps, TextInput }
