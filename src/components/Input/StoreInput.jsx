import { Input } from './Input.style';
import styled from 'styled-components';
import AddBtn from '../Button/AddBtn';

const MenuInput = ({ InputType }) => {
  const InputTypes = [
    { id: 13, name: '식당 이름' },
    { id: 14, name: '위치' },
    { id: 15, name: '상세 주소'},
    { id: 15, name: '전화번호'},
    { id: 15, name: '카테고리'},
    { id: 15, name: '주차 가능 여부'},
    { id: 15, name: '홈페이지'},
    { id: 15, name: '영업 시간'},
    { id: 15, name: '가격대'},
    { id: 15, name: '예약 가능 여부'},
    { id: 15, name: '식당 대표 사진'},
  ];

  return (
   <div>
      {InputTypes.map(type => {
        if (type.name === InputType) {
          if (type.name === '식당 대표 사진'){
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