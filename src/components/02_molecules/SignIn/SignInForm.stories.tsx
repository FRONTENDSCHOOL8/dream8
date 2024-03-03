import { StoryObj } from '@storybook/react';
import SignInForm from '@/components/02_molecules/SignIn/SignInForm';
import { BrowserRouter } from 'react-router-dom';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '로그인 이메일 비밀번호',
  component: SignInForm,

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

type Story = StoryObj<typeof SignInForm>;

export const 옳바르지않는계정: Story = {
  args: {
    isError: true,
    className: 'border rounded-xl w-full h-[3.79rem] px-3 text-lg',
    labelEmail: '이메일',
    labelPassword: '비밀번호',
  },
};
