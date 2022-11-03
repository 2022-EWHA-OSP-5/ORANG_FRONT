import { B } from './Nav.style';
import Back from '../../assets/Navigate/Back.svg';

const GoBackBar = ({ TopBarName, center }) => {
  return (
    <B.Rectangle>
      {center ? (
        <>
          <B.Back src={Back} center />
          <B.TopBarName center>{TopBarName}</B.TopBarName>
        </>
      ) : (
        <>
          <B.Back src={Back} />
          <B.TopBarName>{TopBarName}</B.TopBarName>
        </>
      )}
    </B.Rectangle>
  );
};

export default GoBackBar;
