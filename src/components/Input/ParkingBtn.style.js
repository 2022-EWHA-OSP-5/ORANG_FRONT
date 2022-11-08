import styled, { css } from 'styled-components';
import { React, useState, useEffect } from 'react';

const ParkingBtn = () => {
    const [isBtn, setIsBtn] = useState({
        exist: true,
        none: false,
      });
      const BtnString = ['가능', '불가능'];

      return(
        <Container>
            <Button style={{
              background: isBtn.exist ? '#FF3D00' : 'white',
            }}
                    onClick={() => {
                        setIsBtn({ exist: true, none: false })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.exist ? 'white' : '#FF3D00',
                    }}
                    >
                    가능
                    </p>
                </Button>
                <Button style={{
              background: isBtn.none ? '#FF3D00' : 'white',
            }}

                    onClick={() => {
                        setIsBtn({ exist: false, none: true })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.none ? 'white' : '#FF3D00',
                    }}
                    >
                    불가능
                    </p>
                </Button>
            </Container>
)}

export { ParkingBtn };

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


