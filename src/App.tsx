import React from 'react';
import './App.scss';

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Grid from './components/Grid/Grid'

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Menu />
      <Grid />
    </div>
  );
}

export default App;
