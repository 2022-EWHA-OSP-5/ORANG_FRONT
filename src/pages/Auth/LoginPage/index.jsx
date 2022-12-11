import { Layout, Com } from './style';
import GoBackBar from '../../../components/Navigate/GoBackBar';
import Title_Logo from '../../../assets/Logo/Title_Logo.svg';
import AuthInput from '../../../components/Input/AuthInput';
import OrangeBtn from '../../../components/Button/OrangeBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    axios
      .post('http://127.0.0.1:5000/login', {
        username: id,
        password: password,
      })
      .then(res => {
        console.log(res);

        var userInfo = res.data.data;
        localStorage.setItem('id', JSON.stringify(userInfo.id));
        localStorage.setItem('username', JSON.stringify(userInfo.username));

        navigate('/');
      })
      .catch(err => {
        alert('로그인 실패! 다시 시도해주세요.');
        console.log(err);
      });
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
        회원이 아니신가요?{' '}
        <span onClick={() => navigate('/signup')}>SIGN UP</span>
      </Com.Text>
    </Layout.Display>
  );
}
