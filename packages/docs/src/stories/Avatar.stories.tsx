import type { Meta, StoryObj } from '@storybook/react'
import { AvatarProps, Avatar } from '@sup3r-us3r/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Sup3r-Us3r.png',
    alt: 'Sup3r-Us3r',
  },
  argTypes: {
    src: {
      description: 'Define image URL',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
