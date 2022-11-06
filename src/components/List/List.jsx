import { Layout, Com } from './List.style';
import Food from '../../assets/InstarCard/food1.png';
import YellowStar from '../../assets/Star/YellowStar.svg';
const List = ({ restaurant }) => {
  return (
    <Layout.Box>
      <Com.Img src={Food} />

      <Layout.TextBox>
        <p className="title">{restaurant.name}</p>
        <p className="description">{restaurant.description}</p>

        <Layout.Bottom>
          <img src={YellowStar} />
          <p className="grade">{restaurant.grade}</p>
          <p className="category">{restaurant.category}</p>
        </Layout.Bottom>
      </Layout.TextBox>
    </Layout.Box>
  );
};

export default List;
