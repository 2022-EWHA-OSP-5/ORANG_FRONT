import { Layout } from './Add.style'
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import MenuInput from '../../components/Input/MenuInput';
import Button from '../../components/Detail/Button';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

export default function SignUpPage() {
  var Formdata = require('form-data');
  const data = new Formdata();

  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [uploadFile, setuploadFile] = useState(null);

  const UploadMenu = () => {
    if (name == ''){
      alert("메뉴이름을 입력해주세요.");
    }else if(price == ''){
      alert("가격을 입력해주세요.");
    }else if(uploadFile == null){
      alert("사진을 업로드해주세요.")
    }else{
      data.append('name', name);
      data.append('price', price);
      data.append('image', uploadFile);
/*
      axios
        .post('http://127.0.0.1:5000/restaurants/...', data, {
          headers: {
            'Content-Type' : 'multipart/form-data',
          },
        })
        .them(res => console.log(res))
        .catch(err => console.log(err));
        
        !!!!!!!<int:pk>을 어디서 받아오는지...
*/
    }
    };


  return (
    <Layout.Display>
        <GoBackBar TopBarName="메뉴 등록하기" />
        <Layout.Container>
            <Layout.HeadText>'소녀방앗간'에서의 식사는 만족스러우셨나요?</Layout.HeadText>
            <Layout.HeadText>벗들에게 '소녀방앗간'의 메뉴를 추천해주세요!</Layout.HeadText>

            <Layout.InputBox>
                <Layout.Input>
                <MenuInput InputType="메뉴 이름" value={name} onChange={e => setname(e.target.value)}/>
                </Layout.Input>
                <Layout.Blank/>
                <Layout.Input>
                <MenuInput InputType="가격" value={price} onChange={e => setprice(e.target.value)}/>
                </Layout.Input>
                <Layout.Blank/>
                <Layout.Input>
                <MenuInput InputType="메뉴 사진" 
                        onChange={e=>{e.preventDefault();
                                  if(e.target.files){
                                    setuploadFile(e.target.files[0]);
                                  }}}/>
                </Layout.Input>
            </Layout.InputBox>
            <Layout.Blank/>
            <Layout.Blank/>

            <Layout.HeadText><Star>* </Star>은 필수 입력 항목입니다.</Layout.HeadText>
            <Layout.HeadText>* 부정확한 정보는 무통보 삭제될 수 있습니다</Layout.HeadText>
            <Layout.Blank/>

            <Container>
                <Button
              onClick={() => UploadMenu()}
              children="등록하기"
              width="220px"
              arrow={true}/>
            </Container>
            
      </Layout.Container>
      <BottomNavigateBar></BottomNavigateBar>
    </Layout.Display>

  );
}

const Star = styled.span`
font-weight: 700;
color: #FF0000;
`;

const Container = styled.div`
align-item: center;
justify-content: center;
display: flex;
`;
