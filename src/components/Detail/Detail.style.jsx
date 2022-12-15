import styled from 'styled-components';

const BM = {};

BM.Rectangle = styled.div`
  width: 100%;
  height: 53px;
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: solid 1px var(--border-gray);
`;

BM.Home = styled.img`
  margin-right: 25px;
  height: 22px;
  width: 22px;
`;

BM.BookMark = styled.img`
  margin-right: 25px;
  height: 22px;
  width: 17px;
  color: #000;
`;

BM.Share = styled.img`
  margin-right: 25px;
  height: 24px;
  width: 22px;
`;

BM.MyPage = styled.img`
  margin-right: 25px;
  height: 22px;
  width: 22px;
`;

BM.Button = styled.div`
  width: 40%;
  height: 30px;
  background-color: #fff;
  border: 1px solid var(--orange);
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

BM.ButtonText = styled.div`
  color: var(--orange);
`;

const H = {};

H.HeaderWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  margin-top: 220px;
  background: #fff;
  border-radius: 50px 0px 0px 0px;
  display: flex;
  justify-content: center;
`;

H.MapButton = styled.div`
  width: 53px;
  height: 53px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  position: absolute;
  top: -28px;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

H.Map = styled.img`
  width: 22px;
`;

H.TextContainer = styled.div`
  width: 85%;
  height: auto;
  margin-top: 25px;
`;

H.Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

H.ScoreInfo = styled.div`
  display: flex;
  margin-top: 17px;
  margin-left: 10px;
`;

H.Address = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.47);
  margin-bottom: 7px;
  word-break: keep-all;
`;

H.Info = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
  word-break: keep-all;
`;

H.TagContainer = styled.div`
  width: auto;
  height: 27px;
  border: 1px solid var(--dark-gray);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 8px 20px 0;
`;

H.Tag = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0 10px;
`;

const C = {};

C.Title = styled.p`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 15px;
`;

C.LinkContainer = styled.div`
  border-top: 1px solid var(--gray);
  margin-top: 25px;
  position: relative;
  width: 100%;
  height: 100px;
`;

C.LinkDiv = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 0;
`;

C.Link = styled.a`
  color: var(--orange);
  font-size: 15px;
  font-weight: 400;
`;

C.Back = styled.img`
  margin: 4px 0 0 8px;
  width: 9px;
  height: 12px;
`;

C.Blank = styled.div`
  width: 100%;
  height: 70px;
`;

const I = {};

I.Row = styled.tr``;

I.Type = styled.td`
  margin-right: 15px;
  width: 80px;
`;

I.TypeText = styled.p`
  color: var(--dark-gray);
  font-size: 15px;
`;

I.Content = styled.td`
  display: flex;
  align-items: center;
  width: 95%;
  height: auto;
  min-height: 35px;
`;

I.ContentText = styled.p`
  font-size: 15px;
  word-break: keep-all;
  margin: 5px 0;
`;

I.ContentA = styled.a`
  font-size: 15px;
  margin: 5px 0;
  text-decoration: underline;
`;

const M = {};

M.Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
`;

M.ImgRect = styled.div`
  width: 120px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;
  overflow: hidden;
`;

M.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
`;

M.TextContainer = styled.div``;

M.Name = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 10px;
`;

M.Price = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: var(--red);
  margin-top: 10px;
`;

const R = {};

R.Top = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

R.TopText = styled.p`
  font-size: 12px;
  margin-right: 20px;
`;

R.ButtonContainer = styled.div`
  width: 155px;
  height: 30px;
  background-color: var(--orange);
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

R.Write = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 7px;
`;

R.ButtonText = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

R.Container = styled.div`
  width: 100%;
  margin-top: 30px;
  position: relative;
`;

R.Header = styled.div`
  width: 100%;
  display: flex;
`;

R.ProfileCircle = styled.div`
  width: 43px;
  height: 43px;
  background-color: rgba(248, 197, 182, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  div {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    border: 1px solid #ff3d00;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

R.Profile = styled.img`
  width: 15px;
  height: 19px;
`;

R.Author = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 3px;
`;

R.StarImg = styled.img`
  width: 16.49px;
  height: 14.82px;
  margin-right: 4px;
`;

R.Star = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--dark-gray);
`;

R.Date = styled.p`
  font-size: 13px;
  position: absolute;
  top: 12px;
  right: 0;
  color: var(--dark-gray);
`;

R.ImgRect = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
`;

R.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
`;

R.Content = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0 0 3px;
`;

export { BM, H, C, I, M, R };
