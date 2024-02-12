import logo from './logo.svg';
import './App.css';

import React,{useState} from "react";
import styled from "styled-components";

function App() {
  // 상태 관리
  const [shoppingList,setShoppingList]=useState('');
  const handleInput=()=>{
    setShoppingList('too hard!!!')
  }
  return (
      <>
        <Container>
            <div className={'listUp'}>
                <input type={"text"} />
                <button type={"submit"} onClick={handleInput}>sumbit</button>
            </div>
            <div className={'listText'}>
                {shoppingList}
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