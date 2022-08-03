import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JoinScreen from './screen/JoinScreen';
import LoginScreen from './screen/LoginScreen';
import { routes } from './screen/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<LoginScreen />} />
        <Route path={routes.join} element={<JoinScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
