import type { Meta, StoryObj } from '@storybook/react'
import { MultiStepProps, MultiStep, Box } from '@sup3r-us3r/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    size: 4,
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 1,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
