import { StoryObj } from '@storybook/react';
import Button from '@/components/01_atoms/Button/Button01';

/**@type{import('@storybook/react').Meta} */
export default {
  title: 'Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    className: '',
  },
};

export const 클릭: Story = {
  args: {
    children: 'Button',
    className: 'bg-blue-primary text-white',
  },
};
