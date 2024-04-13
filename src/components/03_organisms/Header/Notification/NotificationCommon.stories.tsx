import { StoryObj } from '@storybook/react';
import Notification from '@/components/03_organisms/Header/Notification/NotificationCommon';
import { BrowserRouter } from 'react-router-dom';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '일반알림창',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isLoggedIn: { control: 'radio', options: [true, false] },
  },
  decorators: [
    (Story: any) => (
      <BrowserRouter>
        <div className="">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof Notification>;

export const 기본표시: Story = {
  args: { isLoggedIn: true },
};
