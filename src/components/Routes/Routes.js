import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '@app/helpers/constants';
import './main.scss';

const Tasks = lazy(() => import(/* webpackPrefetch: true */ '@app/components/Tasks'));
const AddTask = lazy(() => import(/* webpackPrefetch: true */ '@app/components/Tasks/AddTask'));
const List = lazy(() => import(/* webpackPrefetch: true */ '@app/components/List'));
const ResultsChart = lazy(() => import(/* webpackPrefetch: true */ '@app/components/ResultsChart'));

const Routes = () => (
  <main className="main">
    <Switch>
      <Route exact path={ROUTES.TASKS}>
        <Tasks/>
      </Route>
      <Route path={ROUTES.CREATE_TASK}>
        <AddTask/>
      </Route>
      <Route exact path={ROUTES.IDEAS}>
        <List type="Ideas"/>
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
