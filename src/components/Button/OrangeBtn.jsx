import { Children } from 'react';
import styled from 'styled-components';

const OrangeBtn = ({ children }) => {
  return <Button>{children}</Button>;
};

const Button = styled.div`
  margin: 0 46px;
  height: 41px;
  background-color: var(--main-orange);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;

  color: #ffffff;
`;

export default OrangeBtn;
