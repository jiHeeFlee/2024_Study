import React from 'react';
import styled from "styled-components";

function Input(){

    return (
        <>
            <Container>
                <input
                    type={'text'}
                    placeholder={'please your message!'}
                    className={'inputDiv'}
                />
                <input
                    type={'submit'}
                    className={'inputSubmitBtn'}
                >submit</input>
            </Container>
        </>
    )
}

export default Input;

const Container=styled.div`
  display: flex;
  flex-direction: row;
  
  text-align: center;
  
  color: #2e2e2e;
  
  .inputDiv{
    padding-left: 1vw;
    
    outline: none;
    border: #7f7f7f;
  }
  
  .inputSubmitBtn{
    background-color: #fff4c2;
    
    &:hover{
      font-weight: 700;
    }
    
    &:active{
      background-color: mediumseagreen;
      color: white;
    }
  }
`;