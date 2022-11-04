import styled from 'styled-components';

const Layout = {};

Layout.Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 105px;
`;

Layout.CardSection = styled.div`
  height: 325px;
  border: 1px solid red;

  margin-bottom: 34px;
`;

Layout.InstarSlider = styled.div`
  display: flex;
  overflow: scroll;

  margin-top: 20px;
  margin-bottom: 56px;

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
