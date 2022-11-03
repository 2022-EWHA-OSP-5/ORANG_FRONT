import { useNavigate } from 'react-router-dom';
import { C, M } from './Detail.style';
import menuimg from '../../assets/Detail/MenuImg.svg';
import orangeback from '../../assets/Detail/OrangeBack.svg';

const DetailMenu = () => {
  const Nav = useNavigate();
  const menu = [
    {
      name: '한우대창 파히타1',
      price: 49000,
      img: menuimg,
    },
    {
      name: '한우대창 파히타2',
      price: 50000,
      img: menuimg,
    },
    {
      name: '한우대창 파히타3',
      price: 51000,
      img: menuimg,
    },
  ];
  return (
    <>
      <C.Title>대표 메뉴</C.Title>
      {menu.map(menu => {
        let price = menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return (
          <M.Container>
            <M.ImgRect>
              <M.Img src={menu.img} />
            </M.ImgRect>
            <M.TextContainer>
              <M.Name>{menu.name}</M.Name>
              <M.Price>{price}원</M.Price>
            </M.TextContainer>
          </M.Container>
        );
      })}
      <C.LinkContainer>
        <C.LinkDiv onClick={() => Nav('/detail/menu')}>
          <C.Link>전체 메뉴 보기</C.Link>
          <C.Back src={orangeback} />
        </C.LinkDiv>
      </C.LinkContainer>
    </>
  );
};

export default DetailMenu;
