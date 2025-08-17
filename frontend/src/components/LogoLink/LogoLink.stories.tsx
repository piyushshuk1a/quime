import { LogoLink } from './LogoLink.component';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: LogoLink,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/LogoLink',
} satisfies Meta<object>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
