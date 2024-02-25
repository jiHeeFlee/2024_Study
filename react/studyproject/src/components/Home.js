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
  
  color: #1a1a1a;
  font-weight: 500;
  margin-right: 50vw;
  
  &:hover{
    color: #0074D9;
    font-weight: 700;
  }
`;
