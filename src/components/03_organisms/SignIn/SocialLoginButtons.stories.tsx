import { StoryObj } from '@storybook/react';
import SocialLoginButtons from '@/components/03_organisms/SignIn/SocialLoginButtons';
import { BrowserRouter } from 'react-router-dom';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '소셜로그인',
  component: SocialLoginButtons,
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

type Story = StoryObj<typeof SocialLoginButtons>;

export const Defalut: Story = {
  args: {
    className: '',
    fristBgColor: '',
    secondBgColor: '',
    thirdColor: '',
  },
};
