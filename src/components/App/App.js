import React from 'react';
import Header from '@app/components/Header';
import Routes from '@app/components/Routes';
import './app.scss';

const App = () => (
  <div className="wrapper">
    <Header/>
    <Routes/>
  </div>
);

export default App;
