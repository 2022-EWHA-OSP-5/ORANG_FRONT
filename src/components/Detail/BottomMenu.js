import Home from '../../assets/Navigate/Home.svg';
import BookMark from '../../assets/Navigate/BookMark.svg';
import Share from '../../assets/Detail/Share.svg';
import MyPage from '../../assets/Navigate/MyPage.svg';
import { BM } from './Detail.style';
import Button from './Button';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ShareModal from '../Modal/ShareModal';

const BottomMenu = () => {
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
  return (
    <>
      <BM.Rectangle>
        <BM.Home src={Home} />
        <BM.BookMark src={BookMark} />
        <BM.Share src={Share} onClick={() => openSModal()} />
        <BM.MyPage src={MyPage} />
        <Button
          onClick={() => openRModal()}
          children="예약하기"
          width="160px"
          arrow={false}
        />
      </BM.Rectangle>
      {RModal ? (
        <Modal
          open={RModal}
          close={closeRModal}
          subtext="맛집 예약을 진행합니다."
          maintext="예약 방법을 선택해주세요."
          button1text="사이트로 예약하기"
          button2text="전화로 예약하기"
          onClick1={() => {
            console.log('위 버튼 클릭');
          }}
          onClick2={() => {
            console.log('아래 버튼 클릭');
          }}
        />
      ) : null}
      {SModal ? <ShareModal open={SModal} close={closeSModal} /> : null}
    </>
  );
};

export default BottomMenu;
