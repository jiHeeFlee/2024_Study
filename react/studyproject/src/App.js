import React,{useState} from "react";
import styled from "styled-components";

import Home from "../src/components/Home";
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
  
  .photo{
    display: flex;
    flex-direction: column;
  }
`;