import logo from './logo.svg';
import './App.css';

import React,{useState} from "react";
import styled from 'styled-component';
function App() {
  // 상태 관리
  const [shoppingList,setShoppingList]=useState('');
  const handleInput=()=>{
    setShoppingList(shoppingListText.value)
  }
  return (
      <>
        <Container>
            <div className={'listUp'}>
                <input id={shoppingListText} type={"text"} />
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
      outline: none;
      border: lightsalmon;
    }
    
    button{
      background-color: darkgoldenrod;
      color: white;
    }
  }
`;