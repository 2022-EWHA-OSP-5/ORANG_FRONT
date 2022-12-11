import { Layout, Com } from './style';
import GoBackBar from '../../../components/Navigate/GoBackBar';
import Title_Logo from '../../../assets/Logo/Title_Logo.svg';
import AuthInput from '../../../components/Input/AuthInput';
import OrangeBtn from '../../../components/Button/OrangeBtn';

import Check from '../../../assets/Auth/Check.svg';
import GreenCheck from '../../../assets/Auth/GreenCheck.svg';
import Info from '../../../assets/Auth/Info.svg';

import OneBtnModal from '../../../components/Modal/OneBtnModal';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SignUpPage() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [pwcheck, setPwCheck] = useState('');
  const [secretkey, setSecretkey] = useState('');

  const [first, setFirst] = useState(false);

  const CheckPW = pw => {
    setPwCheck(pw);
    setFirst(true);
  };

  const SignUp = () => {
    if (secretkey !== '1886') {
      alert('비밀단어가 틀렸습니다.');
    } else if (password !== pwcheck) {
      alert('비밀번호가 다릅니다.');
    } else {
      axios
        .post('http://127.0.0.1:5000/signup', {
          username: id,
          password: password,
        })
        .then(res => {
          console.log(res);
          var userInfo = res.data.data;
          localStorage.setItem('id', JSON.stringify(userInfo.id));
          localStorage.setItem('username', JSON.stringify(userInfo.username));
          var currentUserInfo = JSON.parse(localStorage.getItem('id'));
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <Layout.Display>
      <GoBackBar TopBarName="회원가입" center path="/" />
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

        <Layout.Input_Logo>
          <AuthInput
            InputType="비밀번호 확인"
            value={pwcheck}
            onChange={e => CheckPW(e.target.value)}
          />

          {/* {first ? <img src={Check} id="mini" /> : <></>} */}

          {password == pwcheck && first ? (
            <img src={GreenCheck} id="mini" />
          ) : (
            <img src={Check} id="mini" />
          )}
        </Layout.Input_Logo>

        <Layout.Input_Logo>
          <AuthInput
            InputType="비밀단어"
            value={secretkey}
            onChange={e => setSecretkey(e.target.value)}
          />
          <img src={Info} id="mini" />
        </Layout.Input_Logo>
      </Layout.InputBox>

      <OneBtnModal />

      <OrangeBtn onClick={() => SignUp()}>회원가입</OrangeBtn>
    </Layout.Display>
  );
}
