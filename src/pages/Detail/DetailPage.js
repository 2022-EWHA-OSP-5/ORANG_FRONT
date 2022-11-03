import styled from 'styled-components';
import { React, useState, useEffect } from 'react';
import DetailHeader from '../../components/Detail/DetailHeader';
import DetailInfo from '../../components/Detail/DetailInfo';
import DetailMenu from '../../components/Detail/DetailMenu';
import DetailReview from '../../components/Detail/DetailReview';
import BottomMenu from '../../components/Detail/BottomMenu';
import mainimg from '../../assets/Detail/DetailMainImg.svg';
import back from '../../assets/Navigate/Back.svg';

const DetailPage = () => {
  const [isTab, setIsTab] = useState({
    info: true,
    menu: false,
    review: false,
  });
  const TabString = ['정보', '메뉴', '리뷰'];
  return (
    <>
      <Wrapper>
        <MainImage>
          <MainImg src={'' === '' ? mainimg : null} />
        </MainImage>
        <BackButton>
          <Back src={back} />
        </BackButton>
        <DetailHeader />
        <Divider />
        <TabContainer>
          <Tab
            style={{
              borderBottom: isTab.info ? '3px solid var(--orange)' : null,
            }}
            onClick={() => setIsTab({ info: true, menu: false, review: false })}
          >
            <TabText
              style={{
                fontWeight: isTab.info ? '600' : '400',
                color: isTab.info ? '#000' : 'var(--dark-gray)',
              }}
            >
              정보
            </TabText>
          </Tab>
          <Tab
            style={{
              borderBottom: isTab.menu ? '3px solid var(--orange)' : null,
            }}
            onClick={() => setIsTab({ info: false, menu: true, review: false })}
          >
            <TabText
              style={{
                fontWeight: isTab.menu ? '600' : '400',
                color: isTab.menu ? '#000' : 'var(--dark-gray)',
              }}
            >
              메뉴
            </TabText>
          </Tab>
          <Tab
            style={{
              borderBottom: isTab.review ? '3px solid var(--orange)' : null,
            }}
            onClick={() => setIsTab({ info: false, menu: false, review: true })}
          >
            <TabText
              style={{
                fontWeight: isTab.review ? '600' : '400',
                color: isTab.review ? '#000' : 'var(--dark-gray)',
              }}
            >
              리뷰
            </TabText>
          </Tab>
        </TabContainer>
        <MainContainer>
          {isTab.info ? (
            <DetailInfo />
          ) : isTab.menu ? (
            <DetailMenu />
          ) : isTab.review ? (
            <DetailReview />
          ) : null}
        </MainContainer>
      </Wrapper>
      <BottomMenu />
    </>
  );
};

export default DetailPage;

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