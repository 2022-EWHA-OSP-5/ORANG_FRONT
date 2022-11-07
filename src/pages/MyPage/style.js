import styled, { css } from 'styled-components';

const Layout = {};

Layout.Display = styled.div``;

Layout.Profile = styled.div`
  margin-top: 29px;
  margin-bottom: 29px;

  display: flex;
  align-items: center;

  .profile {
    margin: 0px 20px 0 29px;
  }

  .username {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    text-align: justify;
  }
`;

Layout.SelectBox = styled.div`
  display: flex;
  height: 50px;
`;

Layout.Title = styled.div`
  display: flex;
  margin-left: 24px;
  margin-top: 21px;

  .title {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    text-align: justify;
  }

  .goto-detail {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 8px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 30px;
    text-align: justify;
    text-decoration-line: underline;
    color: #636363;
  }

  .goto-detail img {
    margin-left: 6px;
  }
`;

Layout.Detail = styled.div`
  margin-left: 22px;

  display: flex;
  align-items: center;

  .grade {
    margin-left: 5px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    text-align: justify;
  }

  .date {
    margin-left: auto;
    margin-right: 23px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: right;

    color: #636363;
  }
`;

Layout.Review = styled.p`
  margin: 12px 22px;
  color: red;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: justify;
`;
const Com = {};

Com.Hr = styled.div`
  width: 100%;
  height: 12px;

  background: #efefef;

  margin-top: 33px;
`;

Com.Button = styled.div`
  position: relative;

  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    text-align: justify;
  }
  .active {
    color: #ff3d00;
  }
`;

Com.Bar = styled.div`
  position: absolute;
  bottom: 0;
  width: 99%;
  height: 4px;

  ${props =>
    props.active
      ? css`
          background-color: var(--orange);
        `
      : css`
          background-color: #d9d9d9; ;
        `}
`;

Com.Num = styled.p`
  margin-left: 22px;
  margin-top: 21px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */

  text-align: justify;
  text-decoration-line: underline;

  color: #636363;
`;

Com.RevieImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    border-radius: 8px;
  }
`;

Com.gotoDetail = styled.p`
  width: 100%;
  display: flex;
  justify-content: end;
  p {
    margin-right: 23px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 30px;
    text-align: justify;
    text-decoration-line: underline;

    color: #636363;
  }
`;
export { Layout, Com };
