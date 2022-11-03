import styled from 'styled-components';

const Layout = {};

Layout.Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

Layout.Input = styled.div`
  height: 42px;
  margin: 0 46px 23px 46px;
`;

Layout.InputBox = styled.div`
  margin-top: 60px;
  margin-bottom: 43px;
`;

Layout.Input_Logo = styled.div`
  height: 42px;
  margin: 0 46px 23px 46px;

  display: flex;
  justify-content: center;
  align-items: center;

  #mini {
    width: 16px;
    height: 16px;

    position: relative;
    left: 10px;
  }
`;

const Com = {};
Com.Logo = styled.img`
  margin: 77px auto 0 auto;
`;

export { Layout, Com };
