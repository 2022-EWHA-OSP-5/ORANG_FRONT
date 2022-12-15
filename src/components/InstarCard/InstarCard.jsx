import { Layout, Text } from './instarcard.style';

import ProfileImg from '../../assets/Detail/Orange4.svg';

import orange1 from '../../assets/Detail/Orange1.svg';
import orange2 from '../../assets/Detail/Orange2.svg';
import orange3 from '../../assets/Detail/Orange3.svg';
import orange4 from '../../assets/Detail/Orange4.svg';

import YellowStar from '../../assets/Star/YellowStar.svg';
import Quotation from '../../assets/InstarCard/Quotation.svg';

import { useNavigate } from 'react-router-dom';
const InstarCard = ({ review, gotoRestaurant }) => {
  const navigate = useNavigate();

  const ProfileImgs = [orange1, orange2, orange3, orange4];

  var imgNum = Math.floor(Math.random() * 4);

  console.log(imgNum);
  return (
    <Layout.Box>
      <Layout.Title>
        <img className="profile" src={ProfileImgs[imgNum]} />
        <p className="nickname">{review.username}</p>
      </Layout.Title>

      <Layout.ImgSection background={`http://127.0.0.1:5000//${review.image}`}>
        <Layout.ImgShadow />
        <Layout.ImgText>
          <img scr={Quotation} className="quotation" />
          <p className="review_title">{review.content}</p>
          <p className="review">{review.content}</p>
        </Layout.ImgText>
      </Layout.ImgSection>

      <Layout.Restaurant>
        <p className="restaurant">{review.restaurant}</p>
        <img className="star" src={YellowStar} />
        <p className="grade">{review.score}.0</p>
      </Layout.Restaurant>

      <Text.GotoDetail onClick={() => navigate(`detail/${gotoRestaurant}`)}>
        바로 가기
      </Text.GotoDetail>
    </Layout.Box>
  );
};

export default InstarCard;
