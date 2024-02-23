import React from "react";
import styled from "styled-components"

function Intro(){

    return(
        <>
            <Container>
                hello!!
                my name is jihee and i study javascript!!
            </Container>
        </>
    )
}

export default Intro;

const Container=styled.div`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  color: #0074D9;
  
  &:hover{
    color: #008800;
  }
`;