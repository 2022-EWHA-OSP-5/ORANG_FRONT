import { useNavigate } from 'react-router-dom';
import GoBackBar from '../../components/Navigate/GoBackBar';
import styled from 'styled-components';
import menuimg from '../../assets/Detail/MenuImg.svg';
import { M } from '../../components/Detail/Detail.style';
import Button from '../../components/Detail/Button';

const DetailMenuPage = () => {
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
  const update = '2022.9.30';
  return (
    <>
      <GoBackBar TopBarName="전체 메뉴" />
      <Wrapper>
        <Container>
          {menu.map(menu => {
            let price = menu.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
          <Footer>
            <Text1>
              메뉴 항목과 가격은 매장의 사정에 따라 <br /> 기재된 내용과 다를 수
              있습니다.
            </Text1>
            <Text2>(메뉴 정보 마지막 업데이트 : {update})</Text2>
            <Button
              onClick={() => Nav('/')}
              children="추천 메뉴 추가하기"
              width="220px"
              arrow={true}
            />
          </Footer>
          <Blank />
        </Container>
      </Wrapper>
    </>
  );
};

export default DetailMenuPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Container = styled.div`
  width: 90%;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Text1 = styled.p`
  color: #a8a8a8;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 20px;
  margin-bottom: 10px;
`;

const Text2 = styled.p`
  color: var(--dark-gray);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

const Blank = styled.div`
  height: 100px;
`;
