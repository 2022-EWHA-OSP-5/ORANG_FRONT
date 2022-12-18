import styled from 'styled-components';
import { R } from '../../components/Detail/Detail.style';
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import starimg from '../../assets/Detail/Star.svg';
import orange1 from '../../assets/Detail/Orange1.svg';
import orange2 from '../../assets/Detail/Orange2.svg';
import orange3 from '../../assets/Detail/Orange3.svg';
import orange4 from '../../assets/Detail/Orange4.svg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailReviewPage = () => {
  let { id } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/restaurants/${id}/reviews/all`)
      .then(res => {
        //console.log(res.data);
        setReview(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);
  const ProfileImg = [orange1, orange2, orange3, orange4];
  const getName = username => {
    let originAuthor = username;
    let maskedAuthor;
    if (originAuthor === '') {
      maskedAuthor = originAuthor;
    } else {
      if (originAuthor.length < 3) {
        maskedAuthor = originAuthor.replace(/(?<=.{1})./gi, '*');
      } else {
        maskedAuthor = originAuthor.replace(/(?<=.{2})./gi, '*');
      }
    }
    return maskedAuthor;
  };
  return (
    <>
      <GoBackBar TopBarName="전체 리뷰" path={-1} />
      <Wrapper>
        <Container>
          <NumText>리뷰 {review.length}건</NumText>
          {review &&
            review.map(review => {
              const rand = Math.floor(Math.random() * 4);
              return (
                <>
                  <R.Container>
                    <R.Header>
                      <R.ProfileCircle>
                        <div>
                          <R.Profile src={ProfileImg[rand]} />
                        </div>
                      </R.ProfileCircle>
                      <div>
                        <R.Author>{getName(review.username)}</R.Author>
                        <div style={{ display: 'flex' }}>
                          <R.StarImg src={starimg} />
                          <R.Star>{review.score.toFixed(1)}</R.Star>
                        </div>
                      </div>
                    </R.Header>
                    <R.ImgRect>
                      <R.Img src={`http://127.0.0.1:5000/${review.image}`} />
                    </R.ImgRect>
                    <R.Content>
                      {review.content && review.content.includes('\n') ? (
                        <>
                          {review.content.split('\n').map(line => {
                            return (
                              <span>
                                {line}
                                <br />
                              </span>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <span>{review.content}</span>
                        </>
                      )}
                    </R.Content>
                  </R.Container>
                </>
              );
            })}
        </Container>
        <Blank />
      </Wrapper>
      <BottomNavigateBar />
    </>
  );
};

export default DetailReviewPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Container = styled.div`
  width: 90%;
`;

const NumText = styled.p`
  color: var(--dark-gray);
  font-weight: 500;
  font-size: 16px;
  margin: 15px 0 0 5px;
`;

const Blank = styled.div`
  height: 100px;
`;
