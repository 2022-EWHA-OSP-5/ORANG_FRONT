import styled from 'styled-components';
import { React, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import Map from '../../components/Map/Map';
import back from '../../assets/Navigate/Back.svg';
import map from '../../assets/Detail/Map.svg';

const DetailMapPage = () => {
  const Nav = useNavigate();
  const address = '서울 서대문구 이화여대길 87 (대현동)';
  return (
    <>
      <Map />
      <Wrapper>
        <BackButton onClick={() => Nav('/detail')}>
          <Back src={back} />
        </BackButton>
        <InfoContainer>
          <div className="inner1">
            <MapIcon src={map} />
            <Title>반서울</Title>
          </div>
          <div className="inner2">
            <Text>{address}</Text>
            <Copy>
              <CopyToClipboard
                text={address}
                onCopy={() => console.log('주소 복사 성공, ', address)}
              >
                <p className="address">복사</p>
              </CopyToClipboard>
            </Copy>
          </div>
        </InfoContainer>
      </Wrapper>
    </>
  );
};

export default DetailMapPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const BackButton = styled.div`
  position: absolute;
  z-index: 10;
  width: 40px;
  height: 40px;
  left: 15px;
  top: 45px;
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

const InfoContainer = styled.div`
  width: 90%;
  min-height: 120px;
  position: fixed;
  z-index: 10;
  bottom: 50px;
  background-color: #fff;
  filter: drop-shadow(2px 2px 7px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  .inner1 {
    display: flex;
    margin: 20px 0 0 20px;
  }
  .inner2 {
    display: flex;
    margin: 10px 0 20px 30px;
  }
`;

const MapIcon = styled.img`
  width: 18px;
`;

const Title = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  margin-left: 12px;
`;

const Text = styled.p`
  width: 80%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  word-break: keep-all;
`;

const Copy = styled.div`
  width: 40px;
  display: flex;
  margin-left: 10px;
  align-items: center;
  p {
    color: var(--orange);
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
  }
`;
