import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SignUpScreen from './screen/sign-up/SignUpScreen';
import LoginScreen from './screen/LoginScreen';
import { routes } from './screen/routes';

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path={routes.home} element={<LoginScreen />} />
          <Route path={routes.join} element={<SignUpScreen />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
