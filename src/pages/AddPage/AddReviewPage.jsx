import { Layout } from './Add.style'
import GoBackBar from '../../components/Navigate/GoBackBar';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import styled from 'styled-components';
import AddBtn from '../../components/Button/AddBtn';
import Button from '../../components/Detail/Button';
import { FiveStarReview } from '../../components/Button/FiveStarsReview';

export default function SignUpPage() {
    return (
      <Layout.Display>
          <GoBackBar TopBarName="" />
          <Layout.Blank/>
          <Layout.Container>
                <H2>반서울</H2>
                <Layout.Blank2/>
                <FiveStarReview/>

                <Layout.Blank2/>
                <Content></Content>
                
            <Layout.Blank2/>
            <AddBtn/>
        </Layout.Container>

        <Layout.Blank/>

        <Container>
                <Button
              onClick={() => {}}
              children="등록하기"
              width="250px"
              arrow={false}/>
            </Container>
        
        <Layout.Blank/>
        <Layout.Blank/>
        <BottomNavigateBar></BottomNavigateBar>
    </Layout.Display>

);}

const Container = styled.div`
align-item: center;
justify-content: center;
display: flex;
`;

const H2 = styled.div`
text-align: center;
font-size: 32px;
font-weight: 700px;


`;

const Content = styled.div`
  height: 250px;
  width: 100%;
  background-color: var(--background-gray);
  border-radius: 10px;
  align-items: center;
  `;