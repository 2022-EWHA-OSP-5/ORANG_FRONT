import { Input } from './Input.style';
import styled from 'styled-components';
import AddBtn from '../Button/AddBtn';

const MenuInput = ({ InputType }) => {
  const InputTypes = [
    { id: 10, name: '메뉴 이름' },
    { id: 20, name: '가격' },
    { id: 30, name: '메뉴 사진'},
  ];

  return (
   <div>
      {InputTypes.map(type => {
        if (type.name === InputType) {
          if (type.name === '메뉴 사진'){
            return (
              <>
              <Box><Text>{type.name}</Text></Box>
              <AddBtn></AddBtn>
              
              </>
            );
          }
          else{
            return (
            <>
            <Box><Text>{type.name}</Text><Star>*</Star></Box>
            <Input.Rectangle></Input.Rectangle>
            </>
          );
          }
          
        }
      })}
    </div>
  );
};

export default MenuInput;

const Text = styled.p`
font-size: 17px;
font-weight: 550;
margin: 0 2px 9px 4px;
`;

const Star = styled.p`
font-weight: 700;
color: #FF0000;
`;

const Box = styled.object`
display: flex;
flex-direction: row;
align-content: center;
`;