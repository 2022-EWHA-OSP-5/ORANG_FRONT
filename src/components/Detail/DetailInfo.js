import { C, I } from './Detail.style';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DetailInfo = ({ rId }) => {
  const [rest, setRest] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/restaurants/${rId}`, {
        headers: {
          Restaurant: rId,
        },
      })
      .then(res => {
        //console.log(res.data.data);
        setRest(res.data.data[0]);
      })
      .catch(err => console.log(err));
  }, [rId]);
  return (
    <>
      {rest ? (
        <>
          <C.Title>영업 정보</C.Title>
          <table>
            {/*
            <I.Row>
              <I.Type>
                <I.TypeText>운영 시간</I.TypeText>
              </I.Type>
              <I.Content>
                <I.ContentText>평일, 토요일 11:30~22:00</I.ContentText>
              </I.Content>
            </I.Row>
            */}
            <I.Row>
              <I.Type>
                <I.TypeText>주소</I.TypeText>
              </I.Type>
              <I.Content>
                <I.ContentText>{rest.address}</I.ContentText>
              </I.Content>
            </I.Row>
            {/*
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
            */}
            <I.Row>
              <I.Type>
                <I.TypeText>전화번호</I.TypeText>
              </I.Type>
              <I.Content>
                <I.ContentA href="tel:{$rest.phone}">{rest.phone}</I.ContentA>
              </I.Content>
            </I.Row>
            <I.Row>
              <I.Type>
                <I.TypeText>홈페이지</I.TypeText>
              </I.Type>
              <I.Content>
                {rest.homepage === ' ' ? (
                  '-'
                ) : (
                  <I.ContentA href={rest.homepage} target="_blank">
                    {rest.homepage}
                  </I.ContentA>
                )}
              </I.Content>
            </I.Row>
          </table>
          <C.Blank />
        </>
      ) : null}
    </>
  );
};

export default DetailInfo;
