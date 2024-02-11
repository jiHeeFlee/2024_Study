import logo from './logo.svg';
import './App.css';

import React,{useState} from "react";
import styled from "styled-components";

function App() {
  // 상태 관리
  const [shoppingList,setShoppingList]=useState('');
  const handleInput=()=>{
    setShoppingList('too hard')
      alert('tooo hard!!!!!');
  }
  return (
      <>
        <Container>
            <div className={'listUp'}>
                <input type={"text"} placeholder={'please input your shopping list!!'}/>
                <button type={"submit"} onClick={handleInput}>sumbit</button>
            </div>
            <div className={'listText'}>
                {shoppingList}
            </div>
        </Container>
      </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
      width: 17.5vw;
      height: 4vh;
      padding-left: 0.7vw;
      
      outline: none;
      border: lightsalmon;
    }
    
    button{
      margin-left: 2vw;
      background-color: darkgoldenrod;
      color: white;
      
      outline: none;
      border: none;
      border-radius: 30%;
    }
  }
  
  .listText{
    margin: 2vh auto;
  }
`;