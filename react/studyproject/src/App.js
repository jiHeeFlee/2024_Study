import React from "react";
import styled from "styled-components";

import Home from "./components/Home";
import Intro from "./components/Intro";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Container>
        <Home />
          <Intro />
          <Input />
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

  color: darkgoldenrod;
  //background-color: #1ea8a3;
`;
