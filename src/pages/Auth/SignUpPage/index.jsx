import { Layout, Com } from './style';
import GoBackBar from '../../../components/Navigate/GoBackBar';
import Title_Logo from '../../../assets/Logo/Title_Logo.svg';
import AuthInput from '../../../components/Input/AuthInput';
import OrangeBtn from '../../../components/Button/OrangeBtn';

import Check from '../../../assets/Auth/Check.svg';
import GreenCheck from '../../../assets/Auth/GreenCheck.svg';
import Info from '../../../assets/Auth/Info.svg';

export default function SignUpPage() {
  return (
    <Layout.Display>
      <GoBackBar TopBarName="회원가입" center />
      <Com.Logo src={Title_Logo} />

      <Layout.InputBox>
        <Layout.Input>
          <AuthInput InputType="아이디" />
        </Layout.Input>

        <Layout.Input>
          <AuthInput InputType="비밀번호" />
        </Layout.Input>

        <Layout.Input_Logo>
          <AuthInput InputType="비밀번호 확인" />
          <img src={Check} id="mini" />
        </Layout.Input_Logo>

        <Layout.Input_Logo>
          <AuthInput InputType="비밀단어" />
          <img src={Info} id="mini" />
        </Layout.Input_Logo>
      </Layout.InputBox>

      <OrangeBtn>회원가입</OrangeBtn>
    </Layout.Display>
  );
}
