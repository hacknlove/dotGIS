import React from 'react';
import './App.scss';

import Header from './containers/Header'
import Menu from './containers/Menu'
import Grid from './containers/Cards'

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
