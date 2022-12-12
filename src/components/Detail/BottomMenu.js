import Home from '../../assets/Navigate/Home.svg';
import BookMark from '../../assets/Navigate/BookMark.svg';
import Share from '../../assets/Detail/Share.svg';
import MyPage from '../../assets/Navigate/MyPage.svg';
import { BM } from './Detail.style';
import Button from './Button';
import { useState, useEffect } from 'react';
import ReserveModal from '../Modal/ReserveModal';
import ShareModal from '../Modal/ShareModal';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BottomMenu = () => {
  let { id } = useParams();
  const Nav = useNavigate();
  const [RModal, isRModal] = useState(false);
  const openRModal = () => {
    isRModal(true);
  };
  const closeRModal = () => {
    isRModal(false);
  };
  const [SModal, isSModal] = useState(false);
  const openSModal = () => {
    isSModal(true);
  };
  const closeSModal = () => {
    isSModal(false);
  };
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
  var currentUser = JSON.parse(localStorage.getItem('id'));
  const Bookmark = id => {
    axios
      .post(`http://127.0.0.1:5000/restaurants/${id}/bookmarks`, {
        user_id: currentUser,
      })
      .then(res => {
        console.log(res.data);
        alert('북마크에 추가되었습니다.');
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <BM.Rectangle>
        <BM.Home src={Home} onClick={() => Nav('/')} />
        <BM.BookMark src={BookMark} onClick={() => Bookmark(id)} />
        <BM.Share src={Share} onClick={() => openSModal()} />
        <BM.MyPage src={MyPage} onClick={() => Nav('/mypage')} />
        <Button
          onClick={() => openRModal()}
          children="예약하기"
          width="160px"
          arrow={false}
        />
      </BM.Rectangle>
      {rest && RModal ? (
        <ReserveModal
          open={RModal}
          close={closeRModal}
          subtext="맛집 예약을 진행합니다."
          maintext="예약 방법을 선택해주세요."
          onClick1={rest.homepage}
          onClick2={rest.phone}
        />
      ) : null}
      {SModal ? <ShareModal open={SModal} close={closeSModal} /> : null}
    </>
  );
};

export default BottomMenu;
