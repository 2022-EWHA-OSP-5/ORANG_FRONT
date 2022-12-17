import styled from 'styled-components';

const Layout = {};

Layout.Display = styled.div`
  padding-top: 53px;
`;

Layout.SelectBox = styled.div`
  flex-shrink: 0;

  overflow-x: scroll;
  overflow-y: hidden;

  display: flex;

  margin-top: 25px;
  margin-left: 35px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

Layout.ListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export { Layout };
