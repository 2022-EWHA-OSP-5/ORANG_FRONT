import styled, { css } from 'styled-components';

const Layout = {};

Layout.Display = styled.div`
  align-items: center;
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
  width: 80%;
  margin-top: 2%
`;

Layout.Container2 = styled.div`
  width: 100%;
  display: flex;
justify-content:center; 
align-items : center;
`;

Layout.Container3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
`;

Layout.Button3 = styled.button`
width: 90px;
height: 35px;
margin: 3px;
border: solid #FF3D00;
border-width: 1px;
border-radius: 18px;
font-size: 14px;
`;


Layout.Button2 = styled.div`
padding: 5px;
`;

Layout.HeadText = styled.div`
  color: var(--dark-gray);
  font-weight: 500;
  font-size: 14px;
  text-align: left;
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

Layout.text = styled.input`
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  width: 90%;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  color: rgba(99, 99, 99, 0.8);

  margin-left: 20px;
`;

Layout.Rectangle = styled.div`
  height: 270px;
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


export { Layout };
