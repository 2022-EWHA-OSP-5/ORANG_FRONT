import { Layout, Com } from './List.style';
import Food from '../../assets/InstarCard/food1.png';
import YellowStar from '../../assets/Star/YellowStar.svg';

const List = ({ restaurant, onClick }) => {
  const imgPath = 'http://127.0.0.1:5000/';

  return (
    <Layout.Box onClick={onClick}>
      <Com.Img src={`http://127.0.0.1:5000/${restaurant.image}`} />

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
