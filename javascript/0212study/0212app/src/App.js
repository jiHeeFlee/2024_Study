import logo from './logo.svg';
import './App.css';

import React,{useState} from "react";
import styled from "styled-components";

function App() {
  // 상태 관리
  const [shoppingList,setShoppingList]=useState('');
  const textValue = document.getElementById('listText').value

    const handleInput=()=>{
      const name=document.getElementById('name').value;
      document.getElementById('result').innerText=name;
    }
    const handleBtn=()=>{
    setShoppingList('too hard!!!')
  }
  return (
      <>
        <Container>
            <div className={'listUp'}>
                <input type={"text"} id={'listText'} onKeyUp={handleInput}/>
                <button type={"submit"} onClick={handleBtn}>sumbit</button>
            </div>
            <div className={'listText'}>
                {shoppingList}
            </div>
            <div id={'result'}>
            </div>
        </Container>
      </>
  );
}

export default App;

const Container=styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
  
  color:darkgoldenrod;
  background-color: lightgoldenrodyellow;
  font-weight: 500;

  padding-top: 2vh;
  
  .listUp{
    display: flex;
    flex-direction: row;
    
    input{
      outline: none;
      border: lightsalmon;

      padding-top : 0.5vh;
      padding-bottom : 0.5vh;
      padding-left: 1.5vw;
    }
    
    button{
      background-color: darkgoldenrod;
      color: white;
      
      padding: 1vw;
      outline: none;
      border: none;
      border-radius: 10px;
    }
  }
  .listText{
    padding: 2vw;
  }
`;