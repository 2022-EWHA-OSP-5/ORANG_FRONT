import { useNavigate } from 'react-router-dom';
import { C, M } from './Detail.style';
import orangeback from '../../assets/Detail/OrangeBack.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DetailMenu = ({ rId }) => {
  const Nav = useNavigate();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/restaurants/${rId}/menus`)
      .then(res => {
        //console.log(res.data);
        setMenu(res.data.data);
      })
      .catch(err => console.log(err));
  }, [rId]);
  return (
    <>
      <C.Title>대표 메뉴</C.Title>
      {menu.map(menu => {
        let price = menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return (
          <M.Container>
            <M.ImgRect>
              <M.Img src={`http://127.0.0.1:5000/${menu.image}`} />
            </M.ImgRect>
            <M.TextContainer>
              <M.Name>{menu.name}</M.Name>
              <M.Price>{price}</M.Price>
            </M.TextContainer>
          </M.Container>
        );
      })}
      <C.LinkContainer>
        <C.LinkDiv onClick={() => Nav(`/detail/${rId}/menu`)}>
          <C.Link>전체 메뉴 보기</C.Link>
          <C.Back src={orangeback} />
        </C.LinkDiv>
      </C.LinkContainer>
    </>
  );
};

export default DetailMenu;
