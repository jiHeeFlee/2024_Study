import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import styled from "@emotion/styled";

function App() {
  return (
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
      <>
        <Wrapper>
          <Welcome name={'flee'} />
        </Wrapper>
      </>
  );
}

const Wrapper=styled.div`
  color: #d51f1f;
  background-color: #fff;
  
  &:hover{
    color: dodgerblue;
    background-color: orange;
  }
`;
export default App;
