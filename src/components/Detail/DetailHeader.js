import { H, R } from './Detail.style';
import map from '../../assets/Detail/Map.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import starimg from '../../assets/Detail/Star.svg';
import axios from 'axios';

const DetailHeader = () => {
  let { id } = useParams();
  const Nav = useNavigate();
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
  }, [id]);
  return (
    <>
      {rest ? (
        <>
          <H.HeaderWrapper>
            <H.MapButton>
              <H.Map src={map} onClick={() => Nav(`/detail/${id}/map`)} />
            </H.MapButton>
            <H.TextContainer>
              <div style={{ display: 'flex' }}>
                <H.Title>{rest.name}</H.Title>
                <H.ScoreInfo>
                  <R.StarImg src={starimg} />
                  {rest.score ? (
                    <>
                      <R.Star>
                        {rest.score.toFixed(1)} ({rest.review_count})
                      </R.Star>
                    </>
                  ) : null}
                </H.ScoreInfo>
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
