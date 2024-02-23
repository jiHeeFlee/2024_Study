import React from "react";
import styled from "styled-components"


function Home(){

    return (
        <>
            <Container>
                Home
            </Container>
        </>
    )
}

export default Home;
const Container=styled.div`
  display: flex;
  flex-direction: column;
  
  color: #1a1a1a;
  font-weight: 500;
  
  &:hover{
    color: #0074D9;
    font-weight: 700;
  }
`;
