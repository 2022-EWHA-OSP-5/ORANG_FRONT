import { B } from './Nav.style';
import Back from '../../assets/Navigate/Back.svg';

const GoBackBar = ({ TopBarName }) => {
  return (
    <B.Rectangle>
      <B.Back src={Back} />
      <B.TopBarName>{TopBarName}</B.TopBarName>
    </B.Rectangle>
  );
};

export default GoBackBar;
