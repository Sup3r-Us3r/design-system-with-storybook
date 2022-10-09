import type { Meta, StoryObj } from '@storybook/react'
import { TextProps, Text } from '@sup3r-us3r/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint incidunt quibusdam officiis voluptatibus. Alias quasi totam sunt explicabo facilis temporibus corrupti voluptatem reiciendis voluptatum? Cupiditate fugit quos quod autem est!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
    size: 'md',
  },
}
