import { useNavigate, useParams } from 'react-router-dom';
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import styled from 'styled-components';
import menuimg from '../../assets/Detail/MenuImg.svg';
import { M } from '../../components/Detail/Detail.style';
import Button from '../../components/Detail/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DetailMenuPage = () => {
  const Nav = useNavigate();
  let { id } = useParams();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/restaurants/${id}/menus/all`)
      .then(res => {
        console.log(res.data);
        setMenu(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <GoBackBar TopBarName="전체 메뉴" path={-1} />
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
                  <M.Price>{price}</M.Price>
                </M.TextContainer>
              </M.Container>
            );
          })}
          <Footer>
            <Text1>
              메뉴 항목과 가격은 매장의 사정에 따라 <br /> 기재된 내용과 다를 수
              있습니다.
            </Text1>
            <Button
              onClick={() => Nav('/add/menu')}
              children="추천 메뉴 추가하기"
              width="220px"
              arrow={true}
            />
          </Footer>
          <Blank />
        </Container>
      </Wrapper>
      <BottomNavigateBar />
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
  margin-bottom: 20px;
`;

const Blank = styled.div`
  height: 100px;
`;
