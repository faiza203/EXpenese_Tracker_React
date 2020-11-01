import React from 'react';
import {Header} from './components/Header';
import {Container, container} from './components/Container';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header />
    <Container />
    </GlobalProvider>
  );
}

export default App;
