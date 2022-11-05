import styled, { css } from 'styled-components';
import { React, useState, useEffect } from 'react';
import Star from '../../assets/AddBtn/Star_empty.svg';

const FiveStarReview = () => {
    const [isBtn, setIsBtn] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
      });

      return(
        <Container>
            <Button onClick={() => {setIsBtn({ one: true, two: false, three: false, four: false, five: false,})}}>
            <img src = {Star} style={{
              fill: isBtn.one ? '#FAB93B' : 'white',
              stroke: isBtn.one ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </img></Button>

            <Button onClick={() => {setIsBtn({ one: true, two: true, three: false, four: false, five: false,})}}>
            <img src = {Star} style={{
              fill: isBtn.one ? '#FAB93B' : 'white',
              stroke: isBtn.one ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </img></Button>

            <Button onClick={() => {setIsBtn({ one: true, two: true, three: true, four: false, five: false,})}}>
            <img src = {Star} style={{
              fill: isBtn.one ? '#FAB93B' : 'white',
              stroke: isBtn.one ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </img></Button>

            <Button onClick={() => {setIsBtn({ one: true, two: true, three: true, four: true, five: false,})}}>
            <img src = {Star} style={{
              fill: isBtn.one ? '#FAB93B' : 'white',
              stroke: isBtn.one ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </img></Button>
            
            <Button onClick={() => {setIsBtn({ one: true, two: true, three: true, four: true, five: true,})}}>
            <img src = {Star} style={{
              fill: isBtn.one ? '#FAB93B' : 'white',
              stroke: isBtn.one ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </img></Button>
            
            </Container>
)}

export { FiveStarReview };


const Container = styled.div`
  width: 100%;
  display: flex;
justify-content:center; 
align-items : center;
`;


const Button = styled.div`
padding: 5px;
`;


