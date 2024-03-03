import { StoryFn } from '@storybook/react';
import MypageInfoMolecules, {
  MypageInfoMoleculesProps,
} from '@/components/02_molecules/Mypage/MypageInfoMolecules';

export default {
  component: MypageInfoMolecules,
  title: '회원가입수정',
};

const Template: StoryFn<MypageInfoMoleculesProps> = (args) => (
  <MypageInfoMolecules {...args} />
);

export const Default = Template.bind({});
Default.args = {};

// export const 내용이없을때경고 = Template.bind({});
// 내용이없을때경고.args = {};

// export const 회원탈퇴 = Template.bind({});
// 회원탈퇴.args = {};
