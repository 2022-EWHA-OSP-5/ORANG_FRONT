import { Layout, Text } from './instarcard.style';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import food1 from '../../assets/InstarCard/food1.png';
import food2 from '../../assets/InstarCard/food2.jpg';
import YellowStar from '../../assets/Star/YellowStar.svg';
import Quotation from '../../assets/InstarCard/Quotation.svg';

import { useNavigate } from 'react-router-dom';
const InstarCard = ({ review, gotoRestaurant }) => {
  const navigate = useNavigate();

  return (
    <Layout.Box>
      <Layout.Title>
        <div className="profile"></div>
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
        <p className="grade">{review.score}</p>
      </Layout.Restaurant>

      <Text.GotoDetail onClick={() => navigate(`detail/${gotoRestaurant}`)}>
        바로 가기
      </Text.GotoDetail>
    </Layout.Box>
  );
};

export default InstarCard;
