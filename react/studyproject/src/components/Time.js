import React from 'react';
import styled from 'styled-components';

function Time(){
    const now=Date.now()

    return(
        <>
            <Container>
                {now}
            </Container>
        </>
    )
}

export default Time;

const Container= styled.div`
  display: flex;
  flex-direction: row;
  
  color: dodgerblue;
  font-weight: 700;
`;