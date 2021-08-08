import React, { useState } from 'react';
import Header from './shared/Header/Header';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SvgGenerator } from './pages/SvgGenerator/SvgGenerator';
import { randomInteger } from './utils/randomInteger';
function App() {
  const [random, setRandom] = useState<number>(randomInteger(0, 2));

  return (
    <>
      <Header setRandom={setRandom} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/svg">
          <SvgGenerator random={random} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
