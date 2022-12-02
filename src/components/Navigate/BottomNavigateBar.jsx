import { Bottom } from './Nav.style';
import Home from '../../assets/Navigate/Home.svg';
import Person from '../../assets/Navigate/Person.svg';
import Plus from '../../assets/Navigate/Plus.svg';

import { useNavigate } from 'react-router-dom';
const BottomNavigateBar = () => {
  const navigate = useNavigate();

  return (
    <Bottom.Rectangle>
      <Bottom.Home src={Home} onClick={() => navigate('/')} />

      <Bottom.Circle src={Plus} onClick={() => navigate('/add')} />

      <Bottom.Person src={Person} onClick={() => navigate('/mypage')} />
    </Bottom.Rectangle>
  );
};

export default BottomNavigateBar;
