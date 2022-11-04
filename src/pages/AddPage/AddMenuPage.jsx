import { Layout } from './Add.style'
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import MenuInput from '../../components/Input/MenuInput';
import Button from '../../components/Detail/Button';
import styled from 'styled-components';

export default function SignUpPage() {
  return (
    <Layout.Display>
        <GoBackBar TopBarName="메뉴 등록하기" />
        <Layout.Container>
            <Layout.HeadText>'소녀방앗간'에서의 식사는 만족스러우셨나요?</Layout.HeadText>
            <Layout.HeadText>벗들에게 '소녀방앗간'의 메뉴를 추천해주세요!</Layout.HeadText>

            <Layout.InputBox>
                <Layout.Input>
                <MenuInput InputType="메뉴 이름" />
                </Layout.Input>
                <Layout.Blank/>
                <Layout.Input>
                <MenuInput InputType="가격" />
                </Layout.Input>
                <Layout.Blank/>
                <Layout.Input>
                <MenuInput InputType="메뉴 사진" />
                </Layout.Input>
            </Layout.InputBox>
            <Layout.Blank/>

            <Layout.HeadText><Star>* </Star>은 필수 입력 항목입니다.</Layout.HeadText>
            <Layout.HeadText>* 부정확한 정보는 무통보 삭제될 수 있습니다</Layout.HeadText>
            <Layout.Blank/>

            <Container>
                <Button
              onClick={() => {}}
              children="등록하기"
              width="220px"
              arrow={true}/>
            </Container>
            
      </Layout.Container>
      <BottomNavigateBar></BottomNavigateBar>
    </Layout.Display>

  );
}

const Star = styled.span`
font-weight: 700;
color: #FF0000;
`;

const Container = styled.div`
align-item: center;
justify-content: center;
display: flex;
`;
