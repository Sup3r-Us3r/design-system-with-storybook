import type { Meta, StoryObj } from '@storybook/react'
import { TextInputRootProps, TextInput2, Box, Text } from '@sup3r-us3r/react'
import { Envelope } from 'phosphor-react'

export default {
  title: 'Form/Text Input2',
  component: TextInput2.Root,
  args: {
    children: <TextInput2.Input placeholder="Type your email" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
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
} as Meta<TextInputRootProps>

export const Primary: StoryObj<TextInputRootProps> = {}

export const WithIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput2.Icon key="1">
        <Envelope />
      </TextInput2.Icon>,

      <TextInput2.Input key="2" placeholder="Type your email" />,
    ],
  },
}

export const Disabled: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput2.Input placeholder="Type your email" disabled />,
  },
}
