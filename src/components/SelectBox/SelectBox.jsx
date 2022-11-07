import { Com } from './SelectBox.style';
import Bottom from '../../assets/Navigate/Bottom.svg';
const SelectBox = ({ select }) => {
  console.log(select);
  const name = select.name;
  const options = select.options;
  options.map(opt => console.log(opt.value));
  return (
    <Com.Box name={name}>
      {name}
      <img src={Bottom} />
    </Com.Box>
  );
};

export default SelectBox;
