import type { Meta, StoryObj } from '@storybook/react'
import { BoxProps, Box, Text } from '@sup3r-us3r/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box Element</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
