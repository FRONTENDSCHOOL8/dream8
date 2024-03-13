import { StoryObj } from '@storybook/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '헤더',
  component: Header,

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

type Story = StoryObj<typeof Header>;

export const 기본표시: Story = {
  args: {},
};
