import styled from 'styled-components';

const Com = {};

Com.Box = styled.div`
  display: flex;
  flex-shrink: 0;

  height: 28px;

  padding: 0 10px 0 10px;
  margin-right: 12px;

  border-radius: 14px;
  background-color: var(--orange);

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  color: white;

  border: none;

  justify-content: center;
  align-items: center;
`;

export { Com };
