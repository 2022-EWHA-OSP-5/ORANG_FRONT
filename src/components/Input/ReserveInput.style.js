import styled, { css } from 'styled-components';
import { React, useState, useEffect } from 'react';

const ReserveBtn = () => {
    const [isBtn, setIsBtn] = useState({
        yesreserve: true,
        noreserve: false,
      });
      const BtnString = ['가능', '불가능'];

      return(
        <Container>
            <Button style={{
              background: isBtn.yesreserve ? '#FF3D00' : 'white',
            }}
                    onClick={() => {
                        setIsBtn({ yesreserve: true, noreserve: false,})
                        }}
                >
                    <p
                    style={{
                        color: isBtn.yesreserve ? 'white' : '#FF3D00',
                    }}
                    >
                    가능
                    </p>
                </Button>
                <Button style={{
              background: isBtn.noreserve ? '#FF3D00' : 'white',
            }}

                    onClick={() => {
                        setIsBtn({ yesreserve: false, noreserve: true })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.noreserve ? 'white' : '#FF3D00',
                    }}
                    >
                    불가능
                    </p>
                </Button>
            </Container>
)}

export { ReserveBtn };

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


