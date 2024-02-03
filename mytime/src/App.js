import styled from 'styled-components';


function App() {
  const Time=Date.now();
  return (
      <>
        <Container>
          <p>::time:: time : {Time}</p>
          <p>seconds : {Time/1000}</p>
          <p>years since : {Time/(365*24*60*1000)}</p>
        </Container>
      </>
  );
}

export default App;

const Container=styled.div`
  display: flex;
  flex-direction: column;

  font-weight: bold;
  color: #008294;
`;

