import styled from 'styled-components';

const Layout = {};

Layout.Box = styled.div`
  display: flex;
  margin: 21px auto 0 25px;
`;

Layout.TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`;

Layout.Bottom = styled.div`
  display: flex;
  align-items: center;
`;
const Com = {};

Com.Img = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 5px;
`;

Com.Star = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
`;

const Text = {};

Text.Title = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
`;

Text.Description = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 19px;
`;

Text.Grade = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: justify;
`;

Text.Category = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #9c9c9c;

  margin-left: 15px;
`;
export { Layout, Com, Text };
