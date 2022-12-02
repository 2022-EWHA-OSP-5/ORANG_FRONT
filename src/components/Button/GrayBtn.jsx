import styled from 'styled-components';

const GrayBtn = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.div`
  margin: 0 30px 0 30px;
  height: 40px;

  border: 2px solid #d9d9d9;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: justify;

  color: black;
`;

export default GrayBtn;
