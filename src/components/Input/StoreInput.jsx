import { Input } from './Input.style';
import styled from 'styled-components';
import AddBtn from '../Button/AddBtn';
import {LocationBtn} from './LocationBtn.style';
import {ParkingBtn} from './ParkingBtn.style';
import {ReserveBtn} from './ReserveInput.style';

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
          if (type.name === '식당 이름'){
              return (
                <>
                <Box><Text>{type.name}</Text><Star>*</Star></Box>
                <Input.Rectangle></Input.Rectangle>
                </>
              );
            }
          if (type.name === '위치'){
            return (
              <>
              <Box><Text>{type.name}</Text><Star>*</Star></Box>
              <LocationBtn></LocationBtn>
              </>
            );
          }
          if (type.name === '카테고리'){
            return(
                <>
                <Box><Text>{type.name}</Text><Star>*</Star></Box>
                <Selection
                    name="category-list" id="category-list">
                    <option value="">한식</option>
                    <option value="">양식</option>
                    <option value="">일식</option>
                    <option value="">중식</option>
                    <option value="">아시아음식</option>
                    <option value="">간편식</option>
                </Selection>
                </>
            )
          }
          if (type.name === '주차 가능 여부'){
            return (
              <>
              <Box><Text>{type.name}</Text></Box>
              <ParkingBtn></ParkingBtn>
              </>
            );
          }
          if (type.name === '가격대'){
            return(
                <>
                <Box><Text>{type.name}</Text><Star>*</Star></Box>
                <Selection
                    name="category-list" id="category-list">
                    <option value="">1만원 이하</option>
                    <option value="">1-2만원대</option>
                    <option value="">2-3만원대</option>
                    <option value="">3-4만원대</option>
                    <option value="">4만원 이상</option>
                </Selection>
                </>
            )
          }
          if (type.name === '예약 가능 여부'){
            return (
              <>
              <Box><Text>{type.name}</Text></Box>
              <ReserveBtn></ReserveBtn>
              </>
            );
          }
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
            <Box><Text>{type.name}</Text></Box>
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

const Selection = styled.select`
width:130px;
height: 37px;
background-color: var(--background-gray);
border: 0;
border-radius: 10px;
text-align: center;
font-size: 16px;
`;
