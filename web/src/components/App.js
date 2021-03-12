import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import CardGenerator from './CardGenerator';
import React from 'react';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/card-generator" component={CardGenerator} />
    </Switch>
  );
}

export default App;
