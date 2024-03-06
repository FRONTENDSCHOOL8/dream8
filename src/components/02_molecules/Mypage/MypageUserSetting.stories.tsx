import { StoryFn } from '@storybook/react';
import MypageUserSetting, {
  MypageUserSettingProps,
} from '@/components/02_molecules/Mypage/MypageUserSetting';

export default {
  component: MypageUserSetting,
  title: '회원가입수정',
};

const Template: StoryFn<MypageUserSettingProps> = (args) => (
  <MypageUserSetting {...args} />
);

export const Default = Template.bind({});
Default.args = {};

// export const 내용이없을때경고 = Template.bind({});
// 내용이없을때경고.args = {};

// export const 회원탈퇴 = Template.bind({});
// 회원탈퇴.args = {};
