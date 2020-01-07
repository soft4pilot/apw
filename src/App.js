
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import State, { initialState } from './state';

// Componentes utilizados
import Header from './components/organisms/Header';

// Recursos que proporciona el servicio
import Home from './resources/Home';
import Page from './resources/Page';

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
