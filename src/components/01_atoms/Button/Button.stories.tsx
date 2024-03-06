import { StoryObj } from '@storybook/react';
import Button from './Button';

/**@type{import('@storybook/react').Meta} */
export default {
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const 기본표시: Story = {
  args: {
    label: 'Click me',
    onClick: () => alert('Button clicked!'),
    type: 'button',
  },
};
