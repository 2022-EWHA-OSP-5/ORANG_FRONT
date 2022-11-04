import { Layout, Com, Text } from './instarcard.style';
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
        <Com.Profile></Com.Profile>
        <Text.NickName>{profile.name}</Text.NickName>
      </Layout.Title>

      <Layout.ImgSection background={food2}>
        <Layout.ImgShadow />
        <Layout.ImgText>
          <Text.Quatation src={Quotation} />

          <Text.ReviewTitle>{review.title}</Text.ReviewTitle>
          <Text.Review>{review.detail}</Text.Review>
        </Layout.ImgText>
      </Layout.ImgSection>

      <Layout.Restaurant>
        <Text.Restaurant>{restaurant.restaurant}</Text.Restaurant>
        <Com.Star src={YellowStar} />
        <Text.Grade>{restaurant.grade}</Text.Grade>
      </Layout.Restaurant>

      <Text.GotoDetail>바로 가기</Text.GotoDetail>
    </Layout.Box>
  );
};

export default InstarCard;
