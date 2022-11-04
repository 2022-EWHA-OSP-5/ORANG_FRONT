import styled, { css } from 'styled-components';
import { React, useState, useEffect } from 'react';

const ParkingBtn = () => {
    const [isBtn, setIsBtn] = useState({
        free: true,
        pricy: false,
        none: false,
      });
      const BtnString = ['무료', '유료', '불가'];

      return(
        <Container>
            <Button style={{
              background: isBtn.free ? '#FF3D00' : 'white',
            }}
                    onClick={() => {
                        setIsBtn({ free: true, pricy: false, none: false })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.free ? 'white' : '#FF3D00',
                    }}
                    >
                    무료
                    </p>
                </Button>
                <Button style={{
              background: isBtn.pricy ? '#FF3D00' : 'white',
            }}

                    onClick={() => {
                        setIsBtn({ free: false, pricy: true, none: false })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.pricy ? 'white' : '#FF3D00',
                    }}
                    >
                    유료
                    </p>
                </Button>
                <Button style={{
              background: isBtn.none ? '#FF3D00' : 'white',
            }}

                    onClick={() => {
                        setIsBtn({ free: false, pricy: false, none: true })
                        }}
                >
                    <p
                    style={{
                        color: isBtn.none ? 'white' : '#FF3D00',
                    }}
                    >
                    불가
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


