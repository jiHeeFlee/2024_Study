import logo from './logo.svg';

import React,{useState} from "react";
import './App.css';
import styled from "styled-components";

function App() {
    const [buttonText,setButtonText]=useState('🎀 fucking world!! 🎀');
    const handleFucking=()=>{
        setButtonText('fucking world!!')
        console.log('click Button!!')
    }
  return (
    <>
      <Container>
        <p>hello world!!</p>
        <Counting onClick={handleFucking}>
            {buttonText}
        </Counting>
      </Container>
    </>
  );
}

export default App;
const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  color:aquamarine;
  font-weight: 700;
`;

const Counting = styled.button`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  
  font-weight: 700;
  color: orangered;
  background-color: orange;
  
  width: 10vw;
  height: 10vh;
  
  outline: none;
  border: none;
  
  &:hover{
    color: white;
    //color :  violet;
    //background-color: #fff;
    //
    //outline: lightpink;
    //border: lightpink;
    //
    //font-weight: 300;
  }
  &:active{
    color :  violet;
    background-color: #fff;

    outline: lightpink;
    border: lightpink;

    font-weight: 300;
  }
`;