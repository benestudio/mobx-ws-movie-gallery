import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Movie from '../../pages/Movie';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/movie/:id" component={Movie} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
