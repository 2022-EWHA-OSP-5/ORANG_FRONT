import { H } from './Detail.style';
import map from '../../assets/Detail/Map.svg';

const DetailHeader = () => {
  return (
    <>
      <H.HeaderWrapper>
        <H.MapButton>
          <H.Map src={map} />
        </H.MapButton>
        <H.TextContainer>
          <div style={{ display: 'flex' }}>
            <H.Title>반서울</H.Title>
          </div>
          <H.Address>서울 서대문구 이화여대길 87 (대현동) 2층</H.Address>
          <H.Info>고립된 공댕이들의 한줄기 빛과 같은 곳</H.Info>
          <div style={{ display: 'flex' }}>
            <H.TagContainer>
              <H.Tag>후문</H.Tag>
            </H.TagContainer>
            <H.TagContainer>
              <H.Tag>아시아 음식</H.Tag>
            </H.TagContainer>
          </div>
        </H.TextContainer>
      </H.HeaderWrapper>
    </>
  );
};

export default DetailHeader;
