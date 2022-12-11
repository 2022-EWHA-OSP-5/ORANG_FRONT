import { Layout, Com } from './style';
import Profil from '../../assets/Profile/Profile.svg';
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import GrayBtn from '../../components/Button/GrayBtn';
import Star from '../../assets/Star/YellowStar.svg';

import food from '../../assets/Food/food.png';
import Right from '../../assets/Navigate/Right.svg';

import List from '../../components/List/List';

import data from './data.js';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { review } from '../MainPage/data';

export default function MyPage() {
  var currentUserInfo = JSON.parse(localStorage.getItem('id'));

  const [myreviews, setMyreviews] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    /*내가 쓴 리뷰 조회 */
    axios
      .get('http://127.0.0.1:5000/mypage/reviews', {
        headers: { User: currentUserInfo },
      })
      .then(res => {
        setMyreviews(res.data.data);
        console.log(res.data.data);
      })
      .catch(err => console.log(err));

    axios
      .get('http://127.0.0.1:5000/mypage/bookmark', {
        headers: { User: currentUserInfo },
      })
      .then(res => {
        setBookmarks(res.data.data);
        console.log('북마크', res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();

  var userName = JSON.parse(localStorage.getItem('username'));
  console.log(userName);

  const LogOut = () => {
    window.localStorage.clear();
    alert('로그아웃 하시겠습니까?');
    navigate('/');
  };

  const [activeBtn, setActiveBtn] = useState([
    { id: 1, name: '저장한 맛집', active: true },
    { id: 2, name: '내가 쓴 리뷰', active: false },
  ]);

  const ClickBtn = id => {
    console.log(id, '???');

    setActiveBtn(
      activeBtn.map(btn =>
        id === btn.id ? { ...btn, active: true } : { ...btn, active: false },
      ),
    );
  };

  return (
    <div>
      <GoBackBar TopBarName="마이페이지" center path="/" />

      <Layout.Profile>
        <img src={Profil} className="profile" />
        <p className="username">{userName} 님</p>
      </Layout.Profile>

      <GrayBtn onClick={() => LogOut()}>로그아웃</GrayBtn>

      <Com.Hr />

      <Layout.SelectBox>
        {activeBtn.map(btn => {
          if (btn.active === true) {
            return (
              <Com.Button className="button" onClick={() => ClickBtn(btn.id)}>
                <p className="active name">{btn.name}</p>
                <Com.Bar active />
              </Com.Button>
            );
          } else {
            return (
              <Com.Button className="button" onClick={() => ClickBtn(btn.id)}>
                <p>{btn.name}</p>
                <Com.Bar />
              </Com.Button>
            );
          }
        })}
      </Layout.SelectBox>

      {activeBtn[0].active === true ? (
        <div>
          <Com.Num>전체 31개</Com.Num>
          {data.map(res => {
            return <List restaurant={res} />;
          })}
        </div>
      ) : (
        myreviews.map(review => {
          return (
            <div>
              <Com.Num>전체 15개</Com.Num>
              <Layout.Title>
                <p className="title">반서울</p>
                <p className="goto-detail">
                  가게 바로 가기 <img src={Right} />
                </p>
              </Layout.Title>
              <Layout.Detail>
                <img src={Star} />
                <p className="grade">5.0</p>
                <p className="date">2022.10.01 방문</p>
              </Layout.Detail>
              <Layout.Review>
                정정말 맛있었어요! 추천합니다~ 정말 맛있었어요! 추천합니다~ 정말
                정말 맛있었어요! 추천합니다~
              </Layout.Review>
              <Com.RevieImg>
                <img src={food} />
              </Com.RevieImg>
              <Com.gotoDetail>
                <p>본문보기</p>
              </Com.gotoDetail>
            </div>
          );
        })
      )}

      <BottomNavigateBar />
    </div>
  );
}
