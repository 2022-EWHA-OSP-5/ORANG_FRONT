import styled from 'styled-components';

const Com = {};

Com.Box = styled.div`
  height: 28px;
  border-radius: 14px;
  background-color: var(--orange);

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;

  border: none;

  padding: 0 14px 0 14px;
  margin-right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 9px;
  }
`;

export { Com };
