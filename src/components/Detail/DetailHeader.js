import { H } from './Detail.style';
import map from '../../assets/Detail/Map.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DetailHeader = ({ rId }) => {
  const Nav = useNavigate();
  const [rest, setRest] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/restaurants/${rId}`, {
        headers: {
          Restaurant: rId,
        },
      })
      .then(res => {
        //console.log(res.data.data);
        setRest(res.data.data[0]);
      })
      .catch(err => console.log(err));
  }, [rId]);
  return (
    <>
      {rest ? (
        <>
          <H.HeaderWrapper>
            <H.MapButton>
              <H.Map src={map} onClick={() => Nav(`/detail/${rId}/map`)} />
            </H.MapButton>
            <H.TextContainer>
              <div style={{ display: 'flex' }}>
                <H.Title>{rest.name}</H.Title>
              </div>
              <H.Address>{rest.address}</H.Address>
              <H.Info>{rest.description}</H.Info>
              <div style={{ display: 'flex' }}>
                <H.TagContainer>
                  <H.Tag>{rest.location}</H.Tag>
                </H.TagContainer>
                <H.TagContainer>
                  <H.Tag>{rest.category}</H.Tag>
                </H.TagContainer>
              </div>
            </H.TextContainer>
          </H.HeaderWrapper>
        </>
      ) : null}
    </>
  );
};

export default DetailHeader;
