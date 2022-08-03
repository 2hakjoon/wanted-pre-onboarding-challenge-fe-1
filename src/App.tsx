import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import JoinScreen from './screen/JoinScreen';
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
          <Route path={routes.join} element={<JoinScreen />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
