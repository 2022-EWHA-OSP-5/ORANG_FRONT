import { Layout } from './Add.style';
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomDeleteNavigateBar';
import styled from 'styled-components';
import Button from '../../components/Detail/Button';
import RedAddBtn from '../../assets/AddBtn/RedAddBtn.svg';
import { React, useState, useEffect } from 'react';
import { ReactComponent as Star } from '../../assets/AddBtn/Star.svg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddReviewPage() {
  const navigate = useNavigate();
  var currentUserInfo = JSON.parse(localStorage.getItem('id'));

  var Formdata = require('form-data');
  const data = new Formdata();
  let { id } = useParams();
  const [rest, setRest] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/restaurants/${id}`, {
        headers: {
          Restaurant: id,
        },
      })
      .then(res => {
        //console.log(res.data.data);
        setRest(res.data.data[0]);
      })
      .catch(err => console.log(err));
  }, []);

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
    if (score == 0) {
      alert('별점을 남겨주세요.');
    }else if(image == null){
      alert("사진을 업로드해주세요.")
    } else {
      data.append('user_id', currentUserInfo);
      data.append('content', content);
      data.append('score', score);
      data.append('image', image);

      axios
        .post(`http://127.0.0.1:5000/restaurants/${id}/reviews`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => {
          console.log(res);

          navigate(`/detail/${id}/review`);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <Layout.Display>
      <GoBackBar TopBarName="" path={-1} />
      <Layout.Blank />
      <Layout.Container>
        <H2>{rest.name}</H2>
        <Layout.Blank2 />
        <Layout.Container2>
          <Layout.Button2
            onClick={() => {
              setIsBtn({
                one: true,
                two: false,
                three: false,
                four: false,
                five: false,
              });
              setscore(1);
            }}
          >
            <Star
              style={{
                fill: isBtn.one ? '#FAB93B' : 'white',
                stroke: isBtn.one ? '#FAB93B' : 'var(--dark-gray)',
              }}
            ></Star>
          </Layout.Button2>

          <Layout.Button2
            onClick={() => {
              setIsBtn({
                one: true,
                two: true,
                three: false,
                four: false,
                five: false,
              });
              setscore(2);
            }}
          >
            <Star
              style={{
                fill: isBtn.two ? '#FAB93B' : 'white',
                stroke: isBtn.two ? '#FAB93B' : 'var(--dark-gray)',
              }}
            ></Star>
          </Layout.Button2>

          <Layout.Button2
            onClick={() => {
              setIsBtn({
                one: true,
                two: true,
                three: true,
                four: false,
                five: false,
              });
              setscore(3);
            }}
          >
            <Star
              style={{
                fill: isBtn.three ? '#FAB93B' : 'white',
                stroke: isBtn.three ? '#FAB93B' : 'var(--dark-gray)',
              }}
            ></Star>
          </Layout.Button2>

          <Layout.Button2
            onClick={() => {
              setIsBtn({
                one: true,
                two: true,
                three: true,
                four: true,
                five: false,
              });
              setscore(4);
            }}
          >
            <Star
              style={{
                fill: isBtn.four ? '#FAB93B' : 'white',
                stroke: isBtn.four ? '#FAB93B' : 'var(--dark-gray)',
              }}
            ></Star>
          </Layout.Button2>

          <Layout.Button2
            onClick={() => {
              setIsBtn({
                one: true,
                two: true,
                three: true,
                four: true,
                five: true,
              });
              setscore(5);
            }}
          >
            <Star
              style={{
                fill: isBtn.five ? '#FAB93B' : 'white',
                stroke: isBtn.five ? '#FAB93B' : 'var(--dark-gray)',
              }}
            ></Star>
          </Layout.Button2>
        </Layout.Container2>

        <Layout.Blank2 />
        <Layout.Rectangle>
          <Layout.text onChange={e => setcontent(e.target.value)} />
        </Layout.Rectangle>

        <Layout.Blank2 />
        <label for="file-upload">
          <img src={RedAddBtn}></img>
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={e => {
            e.preventDefault();
            if (e.target.files) {
              setimage(e.target.files[0]);
            }
          }}
        />
        <Div>{image ? (<input type="image" src={URL.createObjectURL(image)}/>) : null}</Div>
      </Layout.Container>

      <Layout.Blank />

      <Container>
        <Button
          onClick={() => UploadReview()}
          children="등록하기"
          width="250px"
          arrow={false}
        />
      </Container>

      <Layout.Blank />
      <Layout.Blank />
      <BottomNavigateBar></BottomNavigateBar>
    </Layout.Display>
  );
}

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
