import { Layout, Com } from './List.style';
import Food from '../../assets/InstarCard/food1.png';
import YellowStar from '../../assets/Star/YellowStar.svg';
const List = ({ restaurant, onClick }) => {
  return (
    <Layout.Box onClick={onClick}>
      <Com.Img src={restaurant.img} />

      <Layout.TextBox>
        <p className="title">{restaurant.name}</p>
        <p className="description">{restaurant.description.substr(0, 22)}</p>

        <Layout.Bottom>
          <img src={YellowStar} />
          <p className="grade">{restaurant.score}</p>
          <p className="category">{restaurant.category}</p>
        </Layout.Bottom>
      </Layout.TextBox>
    </Layout.Box>
  );
};

export default List;
