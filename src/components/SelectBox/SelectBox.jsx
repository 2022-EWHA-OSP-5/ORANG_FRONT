import { Com } from './SelectBox.style';
import Bottom from '../../assets/Navigate/Bottom.svg';
const SelectBox = ({ select, onClick }) => {
  return <Com.Box onClick={onClick}>{select.value}</Com.Box>;
};

export default SelectBox;
