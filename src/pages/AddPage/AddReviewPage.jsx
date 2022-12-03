import { Layout } from './Add.style'
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import styled from 'styled-components';
import Button from '../../components/Detail/Button';
import RedAddBtn from '../../assets/AddBtn/RedAddBtn.svg';
import { React, useState } from 'react';
import { ReactComponent as Star} from '../../assets/AddBtn/Star.svg';
import axios from 'axios';

export default function AddReviewPage() {

  var currentUserInfo = JSON.parse(localStorage.getItem('id'));
  
  var Formdata = require('form-data');
  const data = new Formdata();

  const [isBtn, setIsBtn] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
      });

  const [content, setcontent] = useState('');
  const [score, setscore] = useState(0);
  const [image, setimage] = useState(null);


  const UploadReview = () => {

    if(isBtn.five==true){setscore(5)}
      else if(isBtn.four==true){setscore(4)}
      else if(isBtn.three==true){setscore(3)}
      else if(isBtn.two==true){setscore(2)}
      else {setscore(1)}
      
    if (score == 0){
      alert("별점을 남겨주세요.");
    }else{

      data.append('user_id', currentUserInfo);
      data.append('content', content);
      data.append('score', score);
      data.append('image', image);


      axios
        .post('http://127.0.0.1:5000/1/reviews', data, {
          headers: {
            'Content-Type' : 'multipart/form-data',
          },
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    };



    return (
      <Layout.Display>
          <GoBackBar TopBarName="" />
          <Layout.Blank/>
          <Layout.Container>
                <H2>반서울</H2>
                <Layout.Blank2/>
                <Layout.Container2>
            <Layout.Button2 onClick={() => {setIsBtn({ one: true, two: false, three: false, four: false, five: false,})}}>
            <Star style={{
              fill: isBtn.one ? '#FAB93B' : 'white',
              stroke: isBtn.one ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Layout.Button2>

            <Layout.Button2 onClick={() => {setIsBtn({ one: true, two: true, three: false, four: false, five: false,})}}>
            <Star style={{
              fill: isBtn.two ? '#FAB93B' : 'white',
              stroke: isBtn.two ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Layout.Button2>

            <Layout.Button2 onClick={() => {setIsBtn({ one: true, two: true, three: true, four: false, five: false,})}}>
            <Star style={{
              fill: isBtn.three ? '#FAB93B' : 'white',
              stroke: isBtn.three ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Layout.Button2>

            <Layout.Button2 onClick={() => {setIsBtn({ one: true, two: true, three: true, four: true, five: false,})}}>
            <Star style={{
              fill: isBtn.four ? '#FAB93B' : 'white',
              stroke: isBtn.four ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Layout.Button2>
            
            <Layout.Button2 onClick={() => {setIsBtn({ one: true, two: true, three: true, four: true, five: true,})}}>
            <Star style={{
              fill: isBtn.five ? '#FAB93B' : 'white',
              stroke: isBtn.five ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Layout.Button2>
            
            </Layout.Container2>

                <Layout.Blank2/>
                <Layout.Rectangle><Layout.text onChange={e => setcontent(e.target.value)} /></Layout.Rectangle>
                
            <Layout.Blank2/>
            <label for="file-upload"><img src={RedAddBtn}></img></label>
              <input type = "file" id = "file-upload" accept="image/*" style={{display:"none"}}
              onChange={e=>{e.preventDefault(); if(e.target.files){ setimage(e.target.files[0]);}}}/>
        </Layout.Container>

        <Layout.Blank/>

        <Container>
                <Button
              onClick={() => UploadReview()}
              children="등록하기"
              width="250px"
              arrow={false}/>
            </Container>
        
        <Layout.Blank/>
        <Layout.Blank/>
        <BottomNavigateBar></BottomNavigateBar>
    </Layout.Display>

);}

const Container = styled.div`
align-item: center;
justify-content: center;
display: flex;
`;

const H2 = styled.div`
text-align: center;
font-size: 32px;
font-weight: 700px;


`;
