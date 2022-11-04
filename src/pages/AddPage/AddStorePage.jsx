import { Layout } from './Add.style'
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import StoreInput from '../../components/Input/StoreInput';
import OrangeBtn from '../../components/Button/OrangeBtn';
import styled from 'styled-components';

export default function SignUpPage() {
  return (
    <Layout.Display>
        <GoBackBar TopBarName="맛집 등록하기" />
        <Layout.Container>
            <Layout.HeadText><Star>숨겨진 맛집</Star>을 등록해 벗들에게 공유해주세요!</Layout.HeadText>
            
            <Layout.InputBox>
                <Layout.Input>
                <StoreInput InputType="식당 이름" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="위치" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="상세 주소" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="전화번호" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="카테고리" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="주차 가능 여부" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="홈페이지" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="영업 시간" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="가격대" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="예약 가능 여부" />
                </Layout.Input>
                <Layout.Blank2/>
                <Layout.Input>
                <StoreInput InputType="식당 대표 사진" />
                </Layout.Input>
            </Layout.InputBox>
            <Layout.Blank/>

            <Layout.HeadText><Star>* </Star>은 필수 입력 항목입니다.</Layout.HeadText>
            <Layout.HeadText>* 부정확한 정보는 무통보 삭제될 수 있습니다</Layout.HeadText>
            <Layout.Blank/>

            <OrangeBtn>맛집 등록하기</OrangeBtn>
      </Layout.Container>
      <BottomNavigateBar></BottomNavigateBar>
    </Layout.Display>
    

  );
}

const Star = styled.span`
font-weight: 550;
color: #FF0000;
`;
