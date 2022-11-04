import styled from 'styled-components';
import RedAddBtn from '../../assets/AddBtn/RedAddBtn.svg';

const AddBtn = () => {
    return <Button><img src={RedAddBtn}></img></Button>;
  };

const Button = styled.div`
  width: 90px;
  height: 94px;
  float: left;
`;

export default AddBtn;