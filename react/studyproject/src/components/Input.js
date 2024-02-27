import React,{useState} from 'react';
import styled from "styled-components";

function Input(){
    const [value,setValue]=useState('');
    const inputValue=setValue(document.getElementById(input))
    return (
        <>
            <Container>
                {/*<InputDiv>*/}
                {/*    <input*/}
                {/*        // type={'text'}*/}
                {/*        // placeholder={'please write your message!'}*/}
                {/*        // className={'inputDiv'}*/}
                {/*    />*/}
                {/*</InputDiv>*/}
                <input
                    type={'text'}
                    id={'input'}
                    placeholder={'please write your message!'}
                    className={'inputDiv'}
                />
                <ButtonDiv>
                    <button
                        type={'submit'}
                        className={'inputSubmitBtn'}>
                        submit
                    </button>
                </ButtonDiv>
            </Container>
        </>
    )
}

export default Input;

const Container=styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  text-align: center;
  
  color: #2e2e2e;
  
  .inputDiv{
    margin: 1vw;
    padding:1vw;

    border: #7f7f7f;
  }
`;

// const InputDiv=styled.input`
//   margin: 1vw;
//   padding: 0.5vw;
//
//   border: #7f7f7f;
// `;

const ButtonDiv=styled.button`
  width: 4vw;
  height: 1.3vh;
  padding: 0.5%;

  background-color: #fff4c2;
  outline: none;
  border: none;
  //border-radius: 10%;
  &:hover{
    background-color: orangered;
    color: white;
    font-weight: 700;
  }

  &:active{
    background-color: mediumseagreen;
    color: white;
  }
`;