import { Layout, Text } from './style';
import TopNavigateBar from '../../components/Navigate/TopNavigateBar';
import InstarCard from '../../components/InstarCard/InstarCard';

import List from '../../components/List/List';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import Right from '../../assets/Navigate/Right.svg';

import { profile, review, restaurant, restaurants } from './data';

export default function MainPage() {
  return (
    <Layout.Display>
      <TopNavigateBar />
      <Layout.CardSection></Layout.CardSection>

      <Text.Title>
        이화’s PICK <span id="point">인기 맛집</span>
      </Text.Title>
      <Text.Mini>벗들이 직접 남긴 솔직한 리뷰</Text.Mini>

      <Layout.InstarSlider>
        <InstarCard
          profile={profile[0]}
          review={review[0]}
          restaurant={restaurant[0]}
        ></InstarCard>

        <InstarCard
          profile={profile[1]}
          review={review[1]}
          restaurant={restaurant[1]}
        ></InstarCard>
      </Layout.InstarSlider>

      <Layout.Full>
        <Text.Title>
          오랭's 맛집 <span id="point">랜덤 추천</span>
        </Text.Title>
        <Text.GotoFull>
          <p>전체보기</p>
          <img src={Right} />
        </Text.GotoFull>
      </Layout.Full>

      <Text.Mini>뭐 먹을지 못 고르겠다면?</Text.Mini>

      {restaurants.map(res => {
        return <List restaurant={res} />;
      })}

      <BottomNavigateBar />
    </Layout.Display>
  );
}
