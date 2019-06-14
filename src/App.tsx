import React from 'react';
import './App.scss';

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Menu />
    </div>
  );
}

export default App;
