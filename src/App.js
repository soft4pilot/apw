
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import State, { initialState } from './metadata';

// Componentes utilizados
import Header from './components/organisms/Header';

// Recursos que proporciona el servicio
import Home from './interfaces/Home';
import Page from './interfaces/Page';

const App = () => {

  return (
    <div>
      <State.Provider value={initialState}>
        <Header />
        <Router>
          <Switch>
            <Route path="/page">
              <Page/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </State.Provider>
    </div>
  );

}

export default App;
