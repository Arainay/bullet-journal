import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '@app/helpers/constants';

const ResultsChart = lazy(() => import(/* webpackPrefetch: true */ '@app/components/ResultsChart'));

const Routes = () => (
  <main className="main">
    <Switch>
      <Route path={ROUTES.TASKS}>

      </Route>
      <Route path={ROUTES.IDEAS}>

      </Route>
      <Route path={ROUTES.CALENDAR}>

      </Route>
      <Route path={ROUTES.RESULT}>
        <ResultsChart/>
      </Route>
      <Redirect exact from="/" to={ROUTES.TASKS}/>
    </Switch>
  </main>
);

export default Routes;
