import { StoryObj } from '@storybook/react';
import LoginCheckLayout from '@/components/03_organisms/Header/Notification/components/LoginCheckLayout';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '로그인하러가기',
  component: LoginCheckLayout,
};

type Story = StoryObj<typeof LoginCheckLayout>;

export const 기본표시: Story = {
  args: {},
};
