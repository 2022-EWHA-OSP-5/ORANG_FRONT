import styled from 'styled-components';

const Layout = {};

Layout.Box = styled.div`
  width: 217px;
  height: 336px;
  background: #ffffff;
  box-shadow: 3px 2px 10px 4px rgba(81, 81, 81, 0.08);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  margin-left: 11px;
`;

Layout.Title = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  margin-left: 16px;
`;

Layout.ImgSection = styled.div`
  position: relative;
  width: 217px;
  height: 217px;
  background: ${props => `url(${props.background}) no-repeat center `};
  background-size: cover;
`;

Layout.ImgShadow = styled.div`
  position: absolute;

  width: 217px;
  height: 217px;

  background: linear-gradient(
    44.94deg,
    rgba(0, 0, 0, 0.35) 34.34%,
    rgba(0, 0, 0, 0.173215) 61.72%,
    rgba(0, 0, 0, 0) 96.77%
  );
`;
Layout.Restaurant = styled.div`
  width: 100%;

  margin: 14px 0 0 16px;
  display: flex;
  align-items: center;
`;

Layout.ImgText = styled.div`
  position: absolute;
  width: 171px;
  height: 148px;

  top: 47px;
  left: 15px;
`;

const Com = {};

Com.Profile = styled.div`
  width: 31px;
  height: 31px;

  background: #d9d9d9;
  border-radius: 17px;
  margin-right: 9px;
`;

Com.Star = styled.img`
  width: 15px;
  height: 15px;
  margin: 0 2px 0 5px;
`;
const Text = {};

Text.NickName = styled.p`
  font-family: var(--font-basic);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
`;

Text.Restaurant = styled.p`
  font-family: var(--font-basic);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;

Text.Grade = styled.p`
  font-family: var(--font-basic);
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
`;

Text.GotoDetail = styled.p`
  font-family: var(--font-basic);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: var(--orange);

  margin-left: 16px;
`;

Text.ReviewTitle = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
`;

Text.Quatation = styled.img`
  height: 15px;
  width: 25px;
`;

Text.Review = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: lighter;

  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  margin-top: 14px;
`;
export { Layout, Com, Text };
