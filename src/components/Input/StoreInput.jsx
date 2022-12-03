import { Input } from './Input.style';
import styled from 'styled-components';
import RedAddBtn from '../../assets/AddBtn/RedAddBtn.svg';
import { React, useState } from 'react';

const StoreInput = ({ InputType, onChange }) => {
  const InputTypes = [
    { id: 13, name: '식당 이름' },
    { id: 14, name: '위치' },
    { id: 15, name: '상세 주소'},
    { id: 15, name: '맛집 설명'},
    { id: 15, name: '전화번호'},
    { id: 15, name: '카테고리'},
    { id: 15, name: '홈페이지'},
    { id: 15, name: '식당 대표 사진'},
  ];

  const [isBtn, setIsBtn] = useState({
    front: true,
    back: false,
    sinchonstation: false,
    ewhastation: false,
  });

  return (
   <div>
      {InputTypes.map(type => {
        if (type.name === InputType) {
          if (type.name === '식당 이름'){
              return (
                <>
                <Box><Text>{type.name}</Text><Star>*</Star></Box>
                <Input.Rectangle><Input.text onChange={onChange} /></Input.Rectangle>
                </>
              );
            }
          if (type.name === '위치'){
            return (
              <>
              <Box><Text>{type.name}</Text><Star>*</Star></Box>
              </>
            );
          }
          if (type.name === '카테고리'){
            return(
                <>
                <Box><Text>{type.name}</Text><Star>*</Star></Box>
                <Selection
                    name="category-list" id="category-list" onChange={onChange}>
                    <option value="한식">한식</option>
                    <option value="양식">양식</option>
                    <option value="일식">일식</option>
                    <option value="중식">중식</option>
                    <option value="분식">분식</option>
                </Selection>
                </>
            )
          }
          if (type.name === '상세 주소'){
            return (
              <>
              <Box><Text>{type.name}</Text><Star>*</Star></Box>
              <Input.Rectangle><Input.text onChange={onChange} /></Input.Rectangle>
              
              </>
            );
          }
          if (type.name === '식당 대표 사진'){
            return (
              <>
              <Box><Text>{type.name}</Text><Star>*</Star></Box>
              <label for="file-upload"><img src={RedAddBtn}></img></label>
              <input type = "file" id = "file-upload" accept="image/*" style={{display:"none"}} onChange={onChange}/>
              
              </>
            );
          }
          else{
            return (
            <>
            <Box><Text>{type.name}</Text></Box>
            <Input.Rectangle><Input.text onChange={onChange} /></Input.Rectangle>
            </>
          );
          }
          
        }
      })}
    </div>
  );
};

export default StoreInput;

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