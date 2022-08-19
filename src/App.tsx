import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import SignUpScreen from './screen/sign-up/SignUpScreen';
import LoginScreen from './screen/login/LoginScreen';
import { routes } from './screen/routes';
import HomeScreen from './screen/home/HomeScreen';
import { theme } from './style/theme';
import ErrorBoundary from './common/components/error-loading/ErrorBoundary';
import { authTokenKey, persistStore } from './persistStore/persistStore';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EAEAEA;
`;

function App() {
  const isLoggedIn = !!persistStore.get(authTokenKey);

  return (
    <Container>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              {isLoggedIn ? (
                <>
                  <Route path={routes.home} element={<HomeScreen />} />
                  <Route path={routes.todo} element={<HomeScreen />} />
                </>
              ) : (
                <>
                  <Route path={routes.home} element={<LoginScreen />} />
                  <Route path={routes.join} element={<SignUpScreen />} />
                </>
              )}
            </Routes>
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    </Container>
  );
}

export default App;
