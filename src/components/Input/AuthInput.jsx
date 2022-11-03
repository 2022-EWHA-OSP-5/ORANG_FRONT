import { Input } from './Input.style';
import Id from '../../assets/Auth/Id.svg';
import Password from '../../assets/Auth/Password.svg';
import Key from '../../assets/Auth/Key.svg';
const AuthInput = ({ InputType }) => {
  const InputTypes = [
    { id: 1, logo: Id, text: '아이디' },
    { id: 2, logo: Password, text: '비밀번호' },
    { id: 2, logo: Password, text: '비밀번호 확인' },
    { id: 2, logo: Key, text: '비밀단어' },
  ];

  return (
    <Input.Rectangle>
      {InputTypes.map(type => {
        if (type.text === InputType) {
          return (
            <>
              <Input.Logo src={type.logo} />
              <Input.text placeholder={type.text} />
            </>
          );
        }
      })}
    </Input.Rectangle>
  );
};

export default AuthInput;
