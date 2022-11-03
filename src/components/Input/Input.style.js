import styled, { css } from 'styled-components';

const Input = {};

Input.Rectangle = styled.div`
  height: 42px;
  width: 100%;
  background-color: var(--background-gray);
  border-radius: 10px;

  display: flex;
  align-items: center;
  padding-left: 10px;

  ${props =>
    props.margin
      ? css`
          margin: 10px;
        `
      : css`
          margin: 0;
        `}
`;

Input.Logo = styled.img`
  width: 23px;
  height: 23px;
`;

Input.text = styled.input`
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  color: rgba(99, 99, 99, 0.8);

  margin-left: 20px;
`;

export { Input };
