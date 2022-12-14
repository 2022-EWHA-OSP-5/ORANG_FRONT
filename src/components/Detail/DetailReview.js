import { useNavigate } from 'react-router-dom';
import { R, C } from './Detail.style';
import write from '../../assets/Detail/Write.svg';
import orangeback from '../../assets/Detail/OrangeBack.svg';
import starimg from '../../assets/Detail/Star.svg';
import orange1 from '../../assets/Detail/Orange1.svg';
import orange2 from '../../assets/Detail/Orange2.svg';
import orange3 from '../../assets/Detail/Orange3.svg';
import orange4 from '../../assets/Detail/Orange4.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DetailReview = ({ rId }) => {
  const isLogin = () => !!localStorage.getItem('id');

  const Nav = useNavigate();
  const [review, setReview] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/restaurants/${rId}/reviews`)
      .then(res => {
        console.log(res.data);
        setReview(res.data.data);
      })
      .catch(err => console.log(err));
  }, [rId]);
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
      <R.Top>
        <R.TopText>이 맛집에 다녀오셨다면?</R.TopText>

        {isLogin() ? (
          <R.ButtonContainer onClick={() => Nav(`/detail/${rId}/write`)}>
            <R.Write src={write} />
            <R.ButtonText>리뷰 작성하기</R.ButtonText>
          </R.ButtonContainer>
        ) : (
          <R.ButtonContainer onClick={() => Nav('/login')}>
            <R.Write src={write} />
            <R.ButtonText>리뷰 작성하기</R.ButtonText>
          </R.ButtonContainer>
        )}
      </R.Top>
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
      <C.LinkContainer>
        <C.LinkDiv onClick={() => Nav(`/detail/${rId}/review`)}>
          <C.Link>전체 리뷰 보기</C.Link>
          <C.Back src={orangeback} />
        </C.LinkDiv>
      </C.LinkContainer>
    </>
  );
};

export default DetailReview;
