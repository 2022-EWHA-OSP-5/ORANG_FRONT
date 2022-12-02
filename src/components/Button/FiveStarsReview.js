import styled, { css } from 'styled-components';
import { React, useState, useEffect } from 'react';
import { ReactComponent as Star} from '../../assets/AddBtn/Star.svg';

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
            <Star style={{
              fill: isBtn.one ? '#FAB93B' : 'white',
              stroke: isBtn.one ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Button>

            <Button onClick={() => {setIsBtn({ one: true, two: true, three: false, four: false, five: false,})}}>
            <Star style={{
              fill: isBtn.two ? '#FAB93B' : 'white',
              stroke: isBtn.two ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Button>

            <Button onClick={() => {setIsBtn({ one: true, two: true, three: true, four: false, five: false,})}}>
            <Star style={{
              fill: isBtn.three ? '#FAB93B' : 'white',
              stroke: isBtn.three ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Button>

            <Button onClick={() => {setIsBtn({ one: true, two: true, three: true, four: true, five: false,})}}>
            <Star style={{
              fill: isBtn.four ? '#FAB93B' : 'white',
              stroke: isBtn.four ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Button>
            
            <Button onClick={() => {setIsBtn({ one: true, two: true, three: true, four: true, five: true,})}}>
            <Star style={{
              fill: isBtn.five ? '#FAB93B' : 'white',
              stroke: isBtn.five ? '#FAB93B' : 'var(--dark-gray)',
            }}>
                </Star></Button>
            
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


