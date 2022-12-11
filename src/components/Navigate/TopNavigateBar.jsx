import { N } from './Nav.style';
import BookMark from '../../assets/Navigate/BookMark.svg';
import Logo from '../../assets/Navigate/Logo.svg';
import Orang from '../../assets/Navigate/Orang.svg';
import { useNavigate } from 'react-router-dom';
const TopNavigateBar = () => {
  const navigate = useNavigate();
  return (
    <N.Rectangle>
      <N.Logo src={Logo} onClick={() => navigate('/')} />
      <N.Orang src={Orang} onClick={() => navigate('/')} />
      <N.BookMark src={BookMark} onClick={() => navigate('/mypage')} />
    </N.Rectangle>
  );
};

export default TopNavigateBar;
