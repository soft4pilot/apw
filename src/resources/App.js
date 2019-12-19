
import React from 'react';
import { Router } from "@reach/router

import useModel from '../model';

import Header from './components/organisms/Header';

import Home from './Home';
import Page from './Page';

const App = () => (

  // Obener los metadatos
  const metadata = useModel('/metadata', {});

  return (
    <div>
      <AppProvider>
        <Header />
        <Router>
          <Home path="/" />
          <Page path="/page" />
        </Router>
      </AppProvider>
    </div>
  );
);

export default App;
