import { StoryObj } from '@storybook/react';
import MypageInfoUserCard from '@/components/02_molecules/Mypage/MypageInfoUserCard';
import { BrowserRouter } from 'react-router-dom';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '마이페이지 유저이미지카드',
  component: MypageInfoUserCard,
  argTypes: {
    fontSize: { control: 'text' },
    fontColor: { control: 'color' },
    ImageSize: { control: 'text' },
  },
  decorators: [
    (Story: any) => (
      <BrowserRouter>
        <div className="m-20">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof MypageInfoUserCard>;

export const textStyle: Story = {
  args: {
    fontSize: '24px',
    fontColor: '#ff0000',
    ImageSize: '145px',
  },
};
