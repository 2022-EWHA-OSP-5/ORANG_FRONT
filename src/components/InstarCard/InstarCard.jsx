import { Layout, Text } from './instarcard.style';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import food1 from '../../assets/InstarCard/food1.png';
import food2 from '../../assets/InstarCard/food2.jpg';
import YellowStar from '../../assets/Star/YellowStar.svg';
import Quotation from '../../assets/InstarCard/Quotation.svg';
const InstarCard = ({ profile, review, restaurant }) => {
  //   var stringToHTML = function (str) {
  //     var dom = document.createElement('div');
  //     dom.innerHTML = str;
  //     return dom;
  //   };
  //   const newText = stringToHTML(review.title);
  //   console.log(newText);

  return (
    <Layout.Box>
      <Layout.Title>
        <div className="profile"></div>
        <p className="nickname">오랭 선생님</p>
      </Layout.Title>

      <Layout.ImgSection background={food2}>
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

      <Text.GotoDetail>바로 가기</Text.GotoDetail>
    </Layout.Box>
  );
};

export default InstarCard;
