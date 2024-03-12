import { Meta, StoryObj } from '@storybook/react';
import SelectModal from './SelectModal';

const meta: Meta<typeof SelectModal> = {
  component: SelectModal,
};

export default meta;

export const 기본표시: StoryObj<typeof SelectModal> = {
  args: {
    title: '장바구니 담기 성공',
    children: <p>결제하기 페이지로 이동하시겠습니까?</p>,
  },
  argTypes: {
    title: { control: 'text' },
  },
};
