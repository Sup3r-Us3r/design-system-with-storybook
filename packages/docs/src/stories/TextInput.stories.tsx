import type { Meta, StoryObj } from '@storybook/react'
import { TextInputProps, TextInput, Box, Text } from '@sup3r-us3r/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your email',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your email',
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'example.com/',
  },
}
