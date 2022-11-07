import styled from 'styled-components';
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import Review from '../../components/Detail/Review';
import reviewimg1 from '../../assets/Detail/ReviewImg1.svg';
import reviewimg2 from '../../assets/Detail/ReviewImg2.svg';

const DetailReviewPage = () => {
  const review = [
    {
      author: 'ewha1234',
      date: '2022.10.25',
      star: 5.0,
      img: reviewimg1,
      content: '너무 맛있어요 아주 그냥 개꿀맛~',
    },
    {
      author: 'osp12345',
      date: '2022.10.20',
      star: 4.0,
      img: reviewimg2,
      content: '굿!!\n굿~~~~~~~~~\n굿~~',
    },
    {
      author: 'sdfsefef',
      date: '2022.9.2',
      star: 3.0,
      img: reviewimg1,
      content: '너무 맛있어요 아주 그냥 개꿀맛~',
    },
    {
      author: 'ukhub5',
      date: '2022.8.15',
      star: 2.0,
      img: reviewimg2,
      content: '굿!!\n굿~~~~~~~~~\n굿~~',
    },
  ];
  return (
    <>
      <GoBackBar TopBarName="전체 리뷰" />
      <Wrapper>
        <Container>
          <NumText>리뷰 {review.length}건</NumText>
          {review.map(review => {
            return (
              <Review
                author={review.author}
                date={review.date}
                star={review.star}
                img={review.img}
                content={review.content}
              />
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
