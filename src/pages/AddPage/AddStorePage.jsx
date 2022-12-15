import { Layout } from './Add.style'
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomDeleteNavigateBar';
import StoreInput from '../../components/Input/StoreInput';
import OrangeBtn from '../../components/Button/OrangeBtn';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RedAddBtn from '../../assets/AddBtn/RedAddBtn.svg';

export default function AddStorePage() {

  const navigate = useNavigate();

  var Formdata = require('form-data');
  const data = new Formdata();

  const [isBtn, setIsBtn] = useState({
    front: true,
    back: false,
    sinchonstation: false,
    ewhastation: false,
  });

  const [name, setname] = useState('');
  const [image, setimage] = useState(null);
  const [location, setlocation] = useState('정문');
  const [address, setaddress] = useState('');
  const [category, setcategory] = useState('한식');
  const [phone, setphone] = useState('');
  const [description, setdescription] = useState('');
  const [homepage, sethomepage] = useState('');


  const UploadStore = () => {

    if (name == ''){
      alert("식당이름을 입력해주세요.");
    }else if(location == null){
      alert("위치를 입력해주세요.")
    }else if(address==''){
      alert("상세 주소를 입력해주세요.")
    }else if(image == null){
      alert("사진을 업로드해주세요.")
    }else{

      data.append('name', name);
      data.append('location', location);
      data.append('address', address);
      data.append('category', category);
      data.append('phone', phone);
      data.append('description', description);
      data.append('homepage', homepage);
      data.append('image', image);

      axios
        .post('http://127.0.0.1:5000/restaurants', data, {
          headers: {
            'Content-Type' : 'multipart/form-data',
          },
        })
        .then(res => {
          console.log(res);  
          navigate(`/add/${res.data.data.id}/menu`);
        })
        .catch(err => console.log(err));

    }
    };

  return (
    <Layout.Display>
        <GoBackBar TopBarName="맛집 등록하기" path={-1} onClick={() => {}}/>
        <Layout.Container>
          <Layout.Blank2/>
            <Layout.HeadText><Star>숨겨진 맛집</Star>을 등록해 벗들에게 공유해주세요!</Layout.HeadText>
            
            <Layout.InputBox>
                <Layout.Input>
                <StoreInput InputType="식당 이름" value={name} onChange={e => setname(e.target.value)} />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="위치"/>
                <Layout.Container3>
               <Layout.Button3 style={{background: isBtn.front ? '#FF3D00' : 'white',}}
                    onClick={() => {setIsBtn({ front: true, back: false, sinchonstation: false, ewhastation: false }); setlocation('정문')}}>
                    <p style={{color: isBtn.front ? 'white' : '#FF3D00',}}>정문</p> </Layout.Button3>

                <Layout.Button3 style={{background: isBtn.back ? '#FF3D00' : 'white',}}
                    onClick={() => {setIsBtn({ front: false, back: true, sinchonstation: false, ewhastation: false }); setlocation('후문')}}>
                    <p style={{color: isBtn.back ? 'white' : '#FF3D00',}}>후문</p></Layout.Button3>

                <Layout.Button3 style={{ background: isBtn.sinchonstation ? '#FF3D00' : 'white',}}
                    onClick={() => {setIsBtn({ front: false, back: false, sinchonstation: true, ewhastation: false }); setlocation('신촌기차역')}}>
                    <p style={{color: isBtn.sinchonstation ? 'white' : '#FF3D00', }}>신촌기차역</p></Layout.Button3>

                <Layout.Button3 style={{background: isBtn.ewhastation ? '#FF3D00' : 'white',}}
                    onClick={() => {setIsBtn({ front: false, back: false, sinchonstation: false, ewhastation: true }); setlocation('이대역')}}>
                    <p style={{color: isBtn.ewhastation ? 'white' : '#FF3D00',}}>이대역</p></Layout.Button3>
                    
             </Layout.Container3>
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="상세 주소" value={address} onChange={e => setaddress(e.target.value)}/>
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="카테고리" value={category} onChange={e => setcategory(e.target.value)} />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="전화번호" value={phone} onChange={e => setphone(e.target.value)}/>
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="맛집 설명" value={description} onChange={e => setdescription(e.target.value)}/>
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="홈페이지" value={homepage} onChange={e => sethomepage(e.target.value)}/>
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="식당 대표 사진"/>
                <label for="file-upload"><img src={RedAddBtn}></img></label>
                <input type = "file" id = "file-upload" accept="image/*" style={{display:"none"}} 
                                    onChange={e=>{e.preventDefault();
                                    if(e.target.files){
                                      setimage(e.target.files[0]);
                                    }}}/>
                <Div>{image ? (<input type="image" src={URL.createObjectURL(image)}/>) : null}</Div>
                </Layout.Input>
            </Layout.InputBox>
            <Layout.Blank/>
            <Layout.Blank/>
            <Layout.HeadText><Star>* </Star>은 필수 입력 항목입니다.</Layout.HeadText>
            <Layout.HeadText>* 부정확한 정보는 무통보 삭제될 수 있습니다</Layout.HeadText>
            <Layout.Blank2/><Layout.Blank2/>

            <OrangeBtn onClick={() => UploadStore()}>맛집 등록하기</OrangeBtn>
            <Layout.Blank2/>
      </Layout.Container>
      <Layout.Blank/>
      <Layout.Blank/>

      <BottomNavigateBar></BottomNavigateBar>
    </Layout.Display>
    

  );
}

const Star = styled.span`
font-weight: 550;
color: #FF0000;
`;

const Div = styled.div`
display:inline-block;
clear:both;
margin-left: 7px;
input {
    width: 85px;
    height: 88.5px;
    object-fit: cover;
    border:2.5px solid #FF3D00;
    border-radius: 10%;
}

`