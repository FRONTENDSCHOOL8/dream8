import { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from './ConfirmModal';

const meta: Meta<typeof ConfirmModal> = {
  component: ConfirmModal,
};

export default meta;

export const 기본표시: StoryObj<typeof ConfirmModal> = {
  args: {},
  argTypes: {
    title: { control: 'text' },
  },
};
