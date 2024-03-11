import { StoryObj } from '@storybook/react';
import NotificationCommon from '@/components/03_organisms/Header/Notification/NotificationCommon';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '일반알림',
  component: NotificationCommon,
};

type Story = StoryObj<typeof NotificationCommon>;

export const 기본표시: Story = {
  args: {},
};
