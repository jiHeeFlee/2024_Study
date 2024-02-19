import React,{useState} from "react";
import styled from "styled-components";

import Home from "./components/Home";
import Intro from "./components/Intro"
// import Photo from "src/asset/img/photo";

function App() {
  return (
    <>
      <Container>
        <Home />
          <div className={'photo'}>
              {/*<Photo />*/}
              editing code...
          </div>
          <Intro />
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

  .photo {
    display: flex;
    flex-direction: column;
  }
`;