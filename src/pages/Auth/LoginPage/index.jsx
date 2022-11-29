import { Layout, Com } from './style';
import GoBackBar from '../../../components/Navigate/GoBackBar';
import Title_Logo from '../../../assets/Logo/Title_Logo.svg';
import AuthInput from '../../../components/Input/AuthInput';
import OrangeBtn from '../../../components/Button/OrangeBtn';
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    axios
      .post('http~', {
        username: id,
        password: password,
      })
      .then(res => {
        console.log(res.message);
        var userData = res.data;
        localStorage.setItem('user', userData);
      })
      .catch(err => console.log(err));
  };

  return (
    <Layout.Display>
      <GoBackBar TopBarName="로그인" path="/" />

      <Com.Logo src={Title_Logo} />
      <Layout.InputBox>
        <Layout.Input>
          <AuthInput
            InputType="아이디"
            value={id}
            onChange={e => setId(e.target.value)}
          />
        </Layout.Input>
        <Layout.Input>
          <AuthInput
            InputType="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Layout.Input>
      </Layout.InputBox>

      <OrangeBtn onClick={() => Login()}>로그인</OrangeBtn>

      <Com.Text>
        회원이 아니신가요? <span>SIGN UP</span>
      </Com.Text>
    </Layout.Display>
  );
}
