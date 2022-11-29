import { B } from './Nav.style';
import Back from '../../assets/Navigate/Back.svg';

import { useNavigate } from 'react-router-dom';
const GoBackBar = ({ TopBarName, center, path }) => {
  const navigate = useNavigate();

  const Goto = () => {
    navigate(path);
    console.log('이동');
  };
  return (
    <B.Rectangle>
      {center ? (
        <>
          <B.Back src={Back} center onClick={Goto} />
          <B.TopBarName center>{TopBarName}</B.TopBarName>
        </>
      ) : (
        <>
          <B.Back src={Back} onClick={Goto} />
          <B.TopBarName>{TopBarName}</B.TopBarName>
        </>
      )}
    </B.Rectangle>
  );
};

export default GoBackBar;
