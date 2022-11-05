import styled, { css } from 'styled-components';
import { React, useState, useEffect } from 'react';

const LocationBtn = () => {
    const [isBtn, setIsBtn] = useState({
        front: true,
        back: false,
        sinchonstation: false,
        ewhastation: false,
      });
      const BtnString = ['정문', '후문', '신촌기차역', '이대역'];

      return(
        <Container>
            <Button style={{
              background: isBtn.front ? '#FF3D00' : 'white',
            }}
                    onClick={() => {
                        setIsBtn({ front: true, back: false, sinchonstation: false, ewhastation: false })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.front ? 'white' : '#FF3D00',
                    }}
                    >
                    정문
                    </p>
                </Button>
                <Button style={{
              background: isBtn.back ? '#FF3D00' : 'white',
            }}

                    onClick={() => {
                        setIsBtn({ front: false, back: true, sinchonstation: false, ewhastation: false })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.back ? 'white' : '#FF3D00',
                    }}
                    >
                    후문
                    </p>
                </Button>
                <Button style={{
              background: isBtn.sinchonstation ? '#FF3D00' : 'white',
            }}

                    onClick={() => {
                        setIsBtn({ front: false, back: false, sinchonstation: true, ewhastation: false })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.sinchonstation ? 'white' : '#FF3D00',
                    }}
                    >
                    신촌기차역
                    </p>
                </Button>
                <Button style={{
              background: isBtn.ewhastation ? '#FF3D00' : 'white',
            }}

                    onClick={() => {
                        setIsBtn({ front: false, back: false, sinchonstation: false, ewhastation: true })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.ewhastation ? 'white' : '#FF3D00',
                    }}
                    >
                    이대역
                    </p>
                </Button>
            </Container>
)}

export { LocationBtn };

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
`;

const Button = styled.button`
width: 90px;
height: 35px;
margin: 3px;
border: solid #FF3D00;
border-width: 1px;
border-radius: 18px;
font-size: 14px;
`;


