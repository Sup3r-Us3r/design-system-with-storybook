import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxProps, Checkbox, Box, Text } from '@sup3r-us3r/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', gap: '$2' }}>
          {Story()}
          <Text size="sm">Accept terms of user</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
