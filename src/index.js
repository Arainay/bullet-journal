import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ServiceProvider from '@app/services';
import TasksProvider from '@app/providers/Tasks';
import App from '@app/components/App';
import Spinner from '@app/components/Spinner';

render(
  <Router>
    <ServiceProvider>
      <TasksProvider>
        <Suspense fallback={<Spinner/>}>
          <App/>
        </Suspense>
      </TasksProvider>
    </ServiceProvider>
  </Router>,
  document.getElementById('root')
);
