import { Layout, Com } from './style';
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import GrayBtn from '../../components/Button/GrayBtn';
import Star from '../../assets/Star/YellowStar.svg';

import Right from '../../assets/Navigate/Right.svg';

import List from '../../components/List/List';

import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import UserInfo from './userInfo';

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
        console.log('내 리뷰', res.data.data);
      })
      .catch(err => console.log(err));

    /*내 북마크 조회 */
    axios
      .get('http://127.0.0.1:5000/mypage/bookmarks', {
        headers: { User: currentUserInfo },
      })
      .then(res => {
        setBookmarks(res.data.data);
        console.log('북마크', res.data.data);
      })
      .catch(err => console.log('북마크에러', err));
  }, []);

  const navigate = useNavigate();

  var userName = JSON.parse(localStorage.getItem('username'));
  console.log(userName);

  const LogOut = useCallback(() => {
    window.localStorage.clear();
    alert('로그아웃 하시겠습니까?');
    navigate('/');
  }, []);

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
    <div style={{ paddingBottom: '100px' }}>
      <GoBackBar TopBarName="마이페이지" center path="/" />

      <UserInfo userName={userName}></UserInfo>

      <GrayBtn onClick={LogOut}>로그아웃</GrayBtn>

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
          <Com.Num>전체 {bookmarks.length}개</Com.Num>
          {bookmarks.map(bookmark => {
            return (
              <List
                restaurant={bookmark}
                onClick={() => navigate(`/detail/${bookmark.id}`)}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Com.Num>전체 {myreviews.length}개</Com.Num>
          {myreviews.map(review => {
            return (
              <div>
                <Layout.Title>
                  <p className="title">{review.restaurant}</p>
                  <p
                    className="goto-detail"
                    onClick={() => navigate(`/detail/${review.restaurant_id}`)}
                  >
                    가게 바로 가기 <img src={Right} />
                  </p>

                  <Layout.Detail>
                    <img src={Star} />
                    <p className="grade">{review.score}</p>
                  </Layout.Detail>
                </Layout.Title>

                <Layout.Review>{review.content}</Layout.Review>
                <Com.RevieImg src={`http://127.0.0.1:5000/${review.image}`}>
                  {/* <img src={`http://127.0.0.1:5000/${review.image}`} /> */}
                </Com.RevieImg>
              </div>
            );
          })}
        </div>
      )}

      <BottomNavigateBar />
    </div>
  );
}
