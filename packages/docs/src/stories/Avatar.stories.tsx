import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@igorc-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/IgorCastilhos.png',
    alt: 'Igor Castilhos',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
