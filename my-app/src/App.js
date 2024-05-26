import React from 'react';

import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from '../src/redux/store';
import SignUp from '../src/pages/SignUp';
import UpdateUser from '../src/pages/UpdateUser';


const Container=styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  gap:1vw;
`;

const App = () => (
  <Provider store={store}>
    <Container>
      <h1>Sign Up</h1>
      <SignUp />
      <h1>Update User</h1>
      <UpdateUser />
    </Container>
  </Provider>
);

export default App;
