import { StoryObj } from '@storybook/react';
import SignInTemplates from '@/components/04_templates/SignIn/SignInTemplates';
import { BrowserRouter } from 'react-router-dom';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '로그인템플릿',
  argTypes: {
    // fontSize: { control: 'text' },
    fontColor: { control: 'color' },
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
  component: SignInTemplates,
};

type Story = StoryObj<typeof SignInTemplates>;

export const Default: Story = {
  args: { fontColor: '#ff0000' },
};
