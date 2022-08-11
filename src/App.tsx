import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import SignUpScreen from './screen/sign-up/SignUpScreen';
import LoginScreen from './screen/login/LoginScreen';
import { routes } from './screen/routes';
import { authToken } from './common/constants/local-storage';
import HomeScreen from './screen/home/HomeScreen';
import { theme } from './style/theme';
import ErrorBoundary from './common/components/ErrorBoundary/ErrorBoundary';

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const isLoggedIn = !localStorage.getItem(authToken);

  return (
    <Wrapper>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              {isLoggedIn ? (
                <>
                  <Route path={routes.home} element={<LoginScreen />} />
                  <Route path={routes.join} element={<SignUpScreen />} />
                </>
              ) : (
                <>
                  <Route path={routes.home} element={<HomeScreen />} />
                  <Route path={routes.todo} element={<HomeScreen />} />
                </>
              )}
            </Routes>
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    </Wrapper>
  );
}

export default App;
