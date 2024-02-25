import React from 'react';
import styled from "styled-components";

function NavigationBar(){
    const navigationList=[
        'Home' , "Intro" , "About" , "More"
    ]

    return(
        <>
            <Container>
                <NavigationBarText>
                    {navigationList}
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
  
  .Line {
    width: 100%;
    height: 10%;

    background-color: #656565;
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
