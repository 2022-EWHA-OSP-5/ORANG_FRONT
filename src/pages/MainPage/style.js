import styled from 'styled-components';

const Layout = {};

Layout.Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 105px;
`;

Layout.Swiper = styled.div`
  position: relative;
  margin-bottom: 34px;
`;

Layout.SwiperTextBox = styled.div`
  width: 227px;
  height: 134px;

  position: absolute;

  z-index: 100;

  top: 114px;
  margin-left: 34px;

  .logo {
    width: 52px;
    height: 18px;
    background-color: #ff3d00;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;

    color: #ffffff;

    margin-bottom: 7px;
  }

  .big {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 41px;
    color: #ffffff;
  }

  .small {
    margin-top: 3px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 23px;

    color: #ffffff;
  }
`;

Layout.InstarSlider = styled.div`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;

  margin-top: 20px;
  margin-bottom: 36px;

  padding-top: 5px;
  height: 360px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

Layout.Full = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const Text = {};

Text.Title = styled.p`
  margin-left: 24px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  #point {
    font-weight: 700;
    font-size: 20px;
    color: var(--orange);
  }
`;

Text.Mini = styled.p`
  margin-left: 24px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-size: 12px;
  line-height: 17px;
  color: #979797;
`;

Text.GotoFull = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  margin-top: 15px;

  p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  img {
    margin-left: 7px;
    height: 13px;
    width: 9px;
  }
`;

export { Layout, Text };
