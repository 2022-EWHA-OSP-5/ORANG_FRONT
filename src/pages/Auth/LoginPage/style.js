import styled from 'styled-components';

const Layout = {};

Layout.Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

Layout.InputBox = styled.div`
  margin-top: 60px;
  margin-bottom: 43px;
`;

Layout.Input = styled.div`
  height: 42px;
  margin: 0 46px 23px 46px;
`;

const Com = {};
Com.Logo = styled.img`
  margin: 77px auto 0 auto;
`;

Com.Text = styled.p`
  margin-top: 32px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  text-align: center;

  color: #636363;

  span {
    font-weight: 500;

    text-decoration-line: underline;

    color: #000000;
  }
`;
export { Layout, Com };
