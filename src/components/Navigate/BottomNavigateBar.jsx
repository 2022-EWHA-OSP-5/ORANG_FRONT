import { Bottom } from './Nav.style';
import Home from '../../assets/Navigate/Home.svg';
import Person from '../../assets/Navigate/Person.svg';
import Plus from '../../assets/Navigate/Plus.svg';
const BottomNavigateBar = () => {
  return (
    <Bottom.Rectangle>
      <Bottom.Home src={Home} />
      <Bottom.Circle>
        <img src={Plus} />
      </Bottom.Circle>
      <Bottom.Person src={Person} />
    </Bottom.Rectangle>
  );
};

export default BottomNavigateBar;
