import { C, I } from './Detail.style';

const DetailInfo = () => {
  const telString = '070-8882-0110';
  const siteString = 'https://github.com/2022-EWHA-OSF-5/ORANG_FRONT';
  return (
    <>
      <C.Title>영업 정보</C.Title>
      <table>
        <I.Row>
          <I.Type>
            <I.TypeText>운영 시간</I.TypeText>
          </I.Type>
          <I.Content>
            <I.ContentText>평일, 토요일 11:30~22:00</I.ContentText>
          </I.Content>
        </I.Row>
        <I.Row>
          <I.Type>
            <I.TypeText>주소</I.TypeText>
          </I.Type>
          <I.Content>
            <I.ContentText>
              서울 서대문구 이화여대길 87 (대현동) 2층
            </I.ContentText>
          </I.Content>
        </I.Row>
        <I.Row>
          <I.Type>
            <I.TypeText>주차</I.TypeText>
          </I.Type>
          <I.Content>
            <I.ContentText>무료</I.ContentText>
          </I.Content>
        </I.Row>
        <I.Row>
          <I.Type>
            <I.TypeText>예약</I.TypeText>
          </I.Type>
          <I.Content>
            <I.ContentText>가능</I.ContentText>
          </I.Content>
        </I.Row>
        <I.Row>
          <I.Type>
            <I.TypeText>전화번호</I.TypeText>
          </I.Type>
          <I.Content>
            <I.ContentA href="tel:{$telString}">{telString}</I.ContentA>
          </I.Content>
        </I.Row>
        <I.Row>
          <I.Type>
            <I.TypeText>홈페이지</I.TypeText>
          </I.Type>
          <I.Content>
            <I.ContentA href={siteString} target="_blank">
              {siteString}
            </I.ContentA>
          </I.Content>
        </I.Row>
      </table>
      <C.Blank />
    </>
  );
};

export default DetailInfo;
