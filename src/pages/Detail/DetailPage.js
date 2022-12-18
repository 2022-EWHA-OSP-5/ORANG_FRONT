import styled from 'styled-components';
import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailInfo from '../../components/Detail/DetailInfo';
import DetailMenu from '../../components/Detail/DetailMenu';
import DetailReview from '../../components/Detail/DetailReview';
import BottomMenu from '../../components/Detail/BottomMenu';
import InfoBox from '../../components/Detail/InfoBox';

const DetailPage = () => {
  let { id } = useParams();

  const [isTab, setIsTab] = useState({
    menu: true,
    review: false,
    info: false,
  });
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
  return (
    <>
      <Wrapper>
        <InfoBox rest={rest} id={id} />
        <TabContainer>
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
        </TabContainer>
        <MainContainer>
          {isTab.info ? (
            <DetailInfo rId={id} />
          ) : isTab.menu ? (
            <DetailMenu rId={id} />
          ) : isTab.review ? (
            <DetailReview rId={id} />
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
