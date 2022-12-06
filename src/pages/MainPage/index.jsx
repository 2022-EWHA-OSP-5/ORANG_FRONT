import { Layout, Text } from './style';
import TopNavigateBar from '../../components/Navigate/TopNavigateBar';
import InstarCard from '../../components/InstarCard/InstarCard';

import List from '../../components/List/List';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import Right from '../../assets/Navigate/Right.svg';
import CustomSwiper from '../../components/Swiper/CustomSwiper';

import { profile, review, restaurant, restaurants } from './data';

import axios from 'axios';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState([]);
  const [random, setRandom] = useState([]);
  const [reviews, setReviews] = useState([]);

  function lottoNum(length) {
    let lotto = [];
    let i = 0;
    while (i < 6) {
      let n = Math.floor(Math.random() * length);
      if (!sameNum(n)) {
        lotto.push(n);
        i++;
      }
    }
    function sameNum(n) {
      return lotto.find(e => e === n);
    }
    return lotto;
  }

  useEffect(() => {
    // 리뷰 랜덤
    axios
      .get('http://127.0.0.1:5000/home')
      .then(res => console.log('테스트', setReviews(res.data.data.reviews)))
      .catch(err => console.log(err));

    // 맛집 랜덤 추천
    axios
      .get('http://127.0.0.1:5000/restaurants')
      .then(res => {
        const length = res.data.data.length;
        const random = lottoNum(length);
        console.log('원본', res.data.data, '섞은 후', random);
        setRestaurants(res.data.data);
        setRandom(random);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout.Display>
      <TopNavigateBar />

      <Layout.Swiper>
        <CustomSwiper></CustomSwiper>

        <Layout.SwiperTextBox>
          <p className="logo">ORANG</p>
          <p className="big">벗들이 추천하는</p>
          <p className="big">믿고 먹는 이대 맛집</p>
          <p className="small">선배가 여기로 오랭</p>
        </Layout.SwiperTextBox>
      </Layout.Swiper>

      <Text.Title>
        이화’s PICK <span id="point">인기 맛집</span>
      </Text.Title>
      <Text.Mini>벗들이 직접 남긴 솔직한 리뷰</Text.Mini>

      <Layout.InstarSlider>
        {reviews.map(review => {
          return (
            <InstarCard
              profile={profile[0]}
              review={review}
              restaurant={restaurant[0]}
            ></InstarCard>
          );
        })}
      </Layout.InstarSlider>

      <Layout.Full>
        <Text.Title>
          오랭's 맛집 <span id="point">랜덤 추천</span>
        </Text.Title>
        <Text.GotoFull>
          <p onClick={() => navigate('/list')}>전체보기</p>
          <img src={Right} />
        </Text.GotoFull>
      </Layout.Full>

      <Text.Mini>뭐 먹을지 못 고르겠다면?</Text.Mini>

      {random.map(res => {
        return (
          <List
            restaurant={restaurants[res]}
            onClick={() => {
              navigate(`/detail/${restaurants[res].id}`);
              console.log('sdfsdfsd');
            }}
          ></List>
        );
      })}

      <BottomNavigateBar />
    </Layout.Display>
  );
}
