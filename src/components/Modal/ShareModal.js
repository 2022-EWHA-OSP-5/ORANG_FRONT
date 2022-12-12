import React, { useEffect } from 'react';
import { useScript } from './KakaoScript.js';
import styled from 'styled-components';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import kakaologo from '../../assets/Detail/ShareLogo/KakaoLogo.svg';
import twitterlogo from '../../assets/Detail/ShareLogo/TwitterLogo.svg';
import facebooklogo from '../../assets/Detail/ShareLogo/FacebookLogo.svg';
import urlcopylogo from '../../assets/Detail/ShareLogo/URLCopyLogo.svg';

const ShareModal = props => {
  const { open, close } = props;
  const currentURL = window.location.href;
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

  // kakao SDK import
  const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');
  useEffect(() => {
    if (status === 'ready' && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('2715c2cd10d5bed4131327e7606d6e31');
      }
    }
  }, [status]);
  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentURL,
    });
  };

  return (
    <>
      {open ? (
        <Container>
          <Background onClick={close} />
          <ModalBlock>
            <Contents>
              <div className="inner">
                <TextWrapper>
                  <SubText>맛집 정보를 공유합니다.</SubText>
                  <MainText>공유 방법을 선택해주세요.</MainText>
                </TextWrapper>
                <ImgWrapper>
                  <Img src={kakaologo} onClick={() => handleKakaoButton()} />
                  <TwitterShareButton url={currentURL}>
                    <Img src={twitterlogo} />
                  </TwitterShareButton>
                  <FacebookShareButton url={currentURL}>
                    <Img src={facebooklogo} />
                  </FacebookShareButton>
                  <CopyToClipboard
                    text={currentURL}
                    onCopy={() => console.log('주소 복사 성공, ', currentURL)}
                  >
                    <Img src={urlcopylogo} />
                  </CopyToClipboard>
                </ImgWrapper>
              </div>
            </Contents>
          </ModalBlock>
        </Container>
      ) : null}
    </>
  );
};

export default ShareModal;

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
  .inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

const ImgWrapper = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
`;
