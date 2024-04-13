import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  tags: ['autodocs'],

  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본표시: Story = {
  args: {
    label: 'Click me',
    onClick: () => alert('Button clicked!'),
    type: 'button',
  },
};
