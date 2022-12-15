import { N } from './Nav.style';
import BookMark from '../../assets/Navigate/BookMark.svg';
import Logo from '../../assets/Navigate/Logo.svg';
import Orang from '../../assets/Navigate/Orang.svg';
import { useNavigate } from 'react-router-dom';
const TopNavigateBar = () => {
  const navigate = useNavigate();

  const isLogin = () => !!localStorage.getItem('id');

  return (
    <N.Rectangle>
      <N.Logo src={Logo} onClick={() => navigate('/')} />
      <N.Orang src={Orang} onClick={() => navigate('/')} />

      {isLogin() ? (
        <N.BookMark src={BookMark} onClick={() => navigate('/mypage')} />
      ) : (
        <N.BookMark src={BookMark} onClick={() => navigate('/login')} />
      )}
    </N.Rectangle>
  );
};

export default TopNavigateBar;
