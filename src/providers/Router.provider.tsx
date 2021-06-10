import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '@/pages';
import { NotFound } from '@/pages/notFound.page';
import Playground from '@/pages/Playgroud.page';
import { PrivateRoute } from '@/utils/PrivateRoute';

const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter basename="cadastro">
      <Switch>
        <PrivateRoute exact path="/" allowedRoles={['user']}>
          <Home />
        </PrivateRoute>
        <Route exact path="/login">
          <Playground />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { RouterProvider };
