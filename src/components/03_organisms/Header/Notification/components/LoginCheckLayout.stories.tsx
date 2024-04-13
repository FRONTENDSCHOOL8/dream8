import { Meta, StoryObj } from '@storybook/react';
import LoginCheckLayout from '@/components/03_organisms/Header/Notification/components/LoginCheckLayout';
import { MemoryRouter } from 'react-router-dom';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '로그인하러가기',
  component: LoginCheckLayout,
  argTypes: {
    isLoggedIn: { control: 'radio', options: [true, false] },
  },
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof LoginCheckLayout>;

type Story = StoryObj<typeof LoginCheckLayout>;

export const 기본표시: Story = {
  args: { isLoggedIn: false },
};
