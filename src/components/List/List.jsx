import { Layout, Com, Text } from './List.style';
import Food from '../../assets/InstarCard/food1.png';
import YellowStar from '../../assets/Star/YellowStar.svg';
const List = ({ restaurant }) => {
  return (
    <Layout.Box>
      <Com.Img src={Food} />

      <Layout.TextBox>
        <Text.Title>{restaurant.name}</Text.Title>
        <Text.Description>{restaurant.description}</Text.Description>

        <Layout.Bottom>
          <Com.Star src={YellowStar} />
          <Text.Grade>{restaurant.grade}</Text.Grade>
          <Text.Category>{restaurant.category}</Text.Category>
        </Layout.Bottom>
      </Layout.TextBox>
    </Layout.Box>
  );
};

export default List;
