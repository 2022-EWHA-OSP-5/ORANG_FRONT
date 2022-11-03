import styled from 'styled-components';

const N = {};

N.Rectangle = styled.div`
  width: 100%;
  height: 53px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: solid 1px var(--border-gray);
`;

N.Logo = styled.img`
  float: left;
  margin-left: 18px;
  width: 33px;
  height: 33px;
`;

N.Orang = styled.img`
  margin: 0 auto;
  height: 29px;
  width: 75px;
`;

N.BookMark = styled.img`
  float: right;
  margin-right: 18px;
  height: 22px;
  width: 17px;
`;

const B = {};

B.Rectangle = styled.div`
  height: 53px;
  width: 100%;
  background-color: white;
  border-bottom: solid 1px var(--border-gray);

  display: flex;
  align-items: center;
`;

B.Back = styled.img`
  margin-left: 17px;
  margin-right: 16px;
  width: 12px;
  height: 20px;
`;

B.TopBarName = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
`;

const Bottom = {};

Bottom.Rectangle = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 70px;
  width: 100%;
  background-color: white;

  display: flex;
  align-items: center;

  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.08);
`;

Bottom.Home = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 20px;
`;

Bottom.Circle = styled.div`
  width: 45px;
  height: 45px;
  background-color: var(--main-orange);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 22px;
    height: 22px;
  }
`;

Bottom.Person = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 20px;
`;

export { N, B, Bottom };
