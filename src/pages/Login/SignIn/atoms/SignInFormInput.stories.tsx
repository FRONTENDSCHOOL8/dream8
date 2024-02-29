import { StoryObj } from '@storybook/react';
import SignInFormInput from '@/pages/Login/SignIn/atoms/SignInFormInput';

/**@type{import('@storybook/react').Meta} */
export default {
  component: SignInFormInput,
};

type Story = StoryObj<typeof SignInFormInput>;

export const 기본표시: Story = {
  args: {
    email: '',
  },
};
