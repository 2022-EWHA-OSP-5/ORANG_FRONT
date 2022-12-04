import { Bottom } from './Nav.style';
import Home from '../../assets/Navigate/Home.svg';
import Person from '../../assets/Navigate/Person.svg';
import X from '../../assets/Navigate/X.svg';
import Modal from '../../components/Modal/Modal';
import { React, useState } from 'react';

import { useNavigate } from 'react-router-dom';
const BottomDeleteNavigateBar = () => {
  const navigate = useNavigate();

  const [RModal, isRModal] = useState(false);
  const openRModal = () => {
    isRModal(true);
  };
  const closeRModal = () => {
    isRModal(false);
  };

  return (
    <Bottom.Rectangle>
      <Bottom.Home src={Home} onClick={() => navigate('/')} />

      <Bottom.Circle src={X} onClick={() => openRModal()} />
      {RModal ? (
        <Modal
          open={RModal}
          close={closeRModal}
          subtext="작성 시 내용이 저장되지 않습니다."
          maintext="정말 작성을 취소하시겠습니까?"
          button1text="유지하기"
          button2text="나가기"
          onClick1={() => closeRModal()}
          onClick2={() => navigate('/detail')}
        />
      ) : null}

      <Bottom.Person src={Person} onClick={() => navigate('/mypage')} />
    </Bottom.Rectangle>
  );
};

export default BottomDeleteNavigateBar;
