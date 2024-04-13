import { Meta, StoryObj } from '@storybook/react';
import CommonLayout from '@/components/03_organisms/Header/Notification/components/CommonLayout';
import { MemoryRouter } from 'react-router-dom';
import pants from 'public/pants.svg';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '일반알림',
  component: CommonLayout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CommonLayout>;

type Story = StoryObj<typeof CommonLayout>;

export const 기본표시: Story = {
  args: {
    src: pants,
    alt: 'ㅇㅇㅇㅇ',
    title: '청바지 하나 팔아요',
    description: '싸다싸',
    isComplete: true,
    type: 'donation',
  },
};
