import React from "react";
import styled from "styled-components";

import Home from "./components/Home";
import Intro from "./components/Intro";
import Input from "./components/Input";
import NavigationBar from "./components/NavigationBar";
import Time from "./components/Time";

function App() {
    const person={
        name : 'jihee',
        age : 26,
        developer : true
    };

    const keys=Object.keys(person);

    return (
    <>
      <Container>
          <div className={'navigationDiv'}>
              <Home />
              <NavigationBar />
          </div>
          <Intro />
          <Input />

          <Time />
          <div className={'dictionary'}>
              {keys+' '}
          </div>
      </Container>
    </>
  );
}

export default App;

const Container=styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  //justify-content: center;

  color: darkgoldenrod;
  //background-color: #1ea8a3;

  .navigationDiv{
    display: flex;
    flex-direction: row;
    margin: 3vh auto;
  }
  .dictionary{
    flex-direction: column;
    
    width: 10vw;
    height: 4vh;

    color: #ce4c4c;
    background-color: #fffdfd;
    outline: none;
    border: none;
    border-radius: 50%;
  }
`;
