import styled from 'styled-components';
import React from 'react';
import mainimg from '../../assets/Detail/DetailMainImg.svg';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/Navigate/Back.svg';
import DetailHeader from '../../components/Detail/DetailHeader';

const InfoBox = ({ rest, id }) => {
  const Nav = useNavigate();

  return (
    <>
      <MainImage>
        <MainImg
          src={
            rest.image === '' ? mainimg : `http://127.0.0.1:5000/${rest.image}`
          }
        />
      </MainImage>

      <BackButton onClick={() => Nav('/list')}>
        <Back src={back} />
      </BackButton>
      <DetailHeader rId={id} />
      <Divider />
    </>
  );
};

export default React.memo(InfoBox);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const MainImage = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
`;

const MainImg = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  -webkit-user-drag: none;
`;

const BackButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 15px;
  top: 15px;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled.img`
  margin-left: 12px;
  margin-right: 16px;
  width: 12px;
  height: 20px;
`;

const Divider = styled.div`
  background-color: var(--gray);
  width: 100%;
  height: 10px;
`;

const TabContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid var(--gray);
`;

const Tab = styled.div`
  width: 27%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabText = styled.p`
  font-size: 15px;
`;

const MainContainer = styled.div`
  width: 85%;
  height: auto;
  margin-top: 20px;
`;
