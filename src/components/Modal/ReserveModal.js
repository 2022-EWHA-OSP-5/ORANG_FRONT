import React, { useEffect } from 'react';
import styled from 'styled-components';

const ReserveModal = props => {
  const { open, close, subtext, maintext, onClick1, onClick2 } = props;
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      {open ? (
        <Container>
          <Background onClick={close} />
          <ModalBlock>
            <Contents>
              <div>
                <TextWrapper>
                  <SubText>{subtext}</SubText>
                  <MainText>{maintext}</MainText>
                </TextWrapper>
                <ButtonWrapper>
                  <ButtonContainer href={onClick1}>
                    <ButtonText>사이트로 예약하기</ButtonText>
                  </ButtonContainer>
                  <ButtonContainer href="tel:{$onClick2}">
                    <ButtonText>전화로 예약하기</ButtonText>
                  </ButtonContainer>
                </ButtonWrapper>
              </div>
            </Contents>
          </ModalBlock>
        </Container>
      ) : null}
    </>
  );
};

export default ReserveModal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: relative;
  background-color: #fff;
  width: 80%;
  height: auto;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const SubText = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
`;

const MainText = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 30px 0;
  div {
    margin-top: 10px;
  }
`;

const ButtonContainer = styled.a`
  width: 180px;
  height: 30px;
  background-color: #fff;
  border: 1px solid var(--orange);
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.p`
  color: var(--orange);
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
`;
