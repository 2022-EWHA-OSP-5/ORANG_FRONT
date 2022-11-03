import { useNavigate } from 'react-router-dom';
import { R, C } from './Detail.style';
import Review from './Review';
import write from '../../assets/Detail/Write.svg';
import orangeback from '../../assets/Detail/OrangeBack.svg';
import reviewimg1 from '../../assets/Detail/ReviewImg1.svg';
import reviewimg2 from '../../assets/Detail/ReviewImg2.svg';

const DetailReview = () => {
  const Nav = useNavigate();
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
  ];
  return (
    <>
      <R.Top>
        <R.TopText>이 맛집에 다녀오셨다면?</R.TopText>
        <R.ButtonContainer onClick={() => Nav('/detail')}>
          <R.Write src={write} />
          <R.ButtonText>리뷰 작성하기</R.ButtonText>
        </R.ButtonContainer>
      </R.Top>
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
      <C.LinkContainer>
        <C.LinkDiv onClick={() => Nav('/detail/review')}>
          <C.Link>전체 리뷰 보기</C.Link>
          <C.Back src={orangeback} />
        </C.LinkDiv>
      </C.LinkContainer>
    </>
  );
};

export default DetailReview;
