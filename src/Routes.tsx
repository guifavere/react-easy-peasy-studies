import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import TodoItem from './pages/TodoItem';

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={TodoItem} path="/items/:name" />
      </Switch>
    </BrowserRouter>
  )
}
