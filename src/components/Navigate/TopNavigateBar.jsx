import { N } from './Nav.style';
import BookMark from '../../assets/Navigate/BookMark.svg';
import Logo from '../../assets/Navigate/Logo.svg';
import Orang from '../../assets/Navigate/Orang.svg';

const TopNavigateBar = () => {
  return (
    <N.Rectangle>
      <N.Logo src={Logo} />
      <N.Orang src={Orang} />
      <N.BookMark src={BookMark} />
    </N.Rectangle>
  );
};

export default TopNavigateBar;
