import React from 'react';
import styled from "styled-components";

function NavigationBar(){

    return(
        <>
            <Container>
                <NavigationBarText>
                    Home
                    Intro
                    About
                    More
                </NavigationBarText>
                <div className={'Line'} />
            </Container>
        </>
    )
}

export default NavigationBar;

const Container=styled.div`
  display: flex;
  flex-direction: column;
  
  .Line{
    width: 70%;
    height: 0.3vh;
  }
`;

const NavigationBarText=styled.div`
  display: flex;
  flex-direction: row;

  color: #2e2e2e;
  &:hover{
    font-weight: 700;
  }
  
  &:active{
    font-weight: 700;
    color: black;
  }
`;
