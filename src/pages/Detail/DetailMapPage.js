import styled from 'styled-components';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import Map from '../../components/Map/Map';
import back from '../../assets/Navigate/Back.svg';
import map from '../../assets/Detail/Map.svg';

const DetailMapPage = () => {
  const Nav = useNavigate();
  let { id } = useParams();
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
      <Map addr={rest.address} />
      <Wrapper>
        <BackButton onClick={() => Nav(-1)}>
          <Back src={back} />
        </BackButton>
        <InfoContainer>
          <div className="inner1">
            <MapIcon src={map} />
            <Title>{rest.name}</Title>
          </div>
          <div className="inner2">
            <Text>{rest.address}</Text>
            <Copy>
              <CopyToClipboard
                text={rest.address}
                onCopy={() => console.log('주소 복사 성공, ', rest.address)}
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
