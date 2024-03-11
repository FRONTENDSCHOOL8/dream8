import { StoryObj } from '@storybook/react';
import Notification from '@/components/03_organisms/Header/Notification/NotificationCommon';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '일반알림창',
  component: Notification,
};

type Story = StoryObj<typeof Notification>;

export const 기본표시: Story = {
  args: {},
};
