import styled from 'styled-components';

const Layout = {};

Layout.Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

Layout.Input = styled.div`
  height: 42px;
  margin: 0 46px 35px 0;
`;

Layout.InputBox = styled.div`
  margin-top: 30px;
  margin-bottom: 43px;
`;

Layout.Container = styled.div`
  width: 88%;
  margin: 20px 40px;
`;

Layout.HeadText = styled.div`
  color: var(--dark-gray);
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  clear: both;
`;

Layout.Blank = styled.div`
  height: 35px;
  clear:both;
`;

Layout.Blank2 = styled.div`
  height: 10px;
  clear:both;
`;


export { Layout };
