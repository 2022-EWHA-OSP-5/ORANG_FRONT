import { Layout, Com } from './style';
import GoBackBar from '../../../components/Navigate/GoBackBar';
import Title_Logo from '../../../assets/Logo/Title_Logo.svg';
import AuthInput from '../../../components/Input/AuthInput';
import OrangeBtn from '../../../components/Button/OrangeBtn';
export default function LoginPage() {
  return (
    <Layout.Display>
      <GoBackBar TopBarName="로그인" />
      <Com.Logo src={Title_Logo} />
      <Layout.InputBox>
        <Layout.Input>
          <AuthInput InputType="아이디" />
        </Layout.Input>
        <Layout.Input>
          <AuthInput InputType="비밀번호" />
        </Layout.Input>
      </Layout.InputBox>

      <OrangeBtn>로그인</OrangeBtn>

      <Com.Text>
        회원이 아니신가요? <span>SING UP</span>
      </Com.Text>
    </Layout.Display>
  );
}
