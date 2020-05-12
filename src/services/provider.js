import React, { createContext, useEffect, useState } from 'react';
import TaskService from './TaskService';
import createDatabase from '@app/helpers/createDatabase';
import Spinner from '@app/components/Spinner';

export const ServiceContext = createContext({});

const ServiceProvider = ({ children }) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    createDatabase()
      .then(db => {
        setDb(db);
      });
  }, []);

  if (!db) {
    return <Spinner/>;
  }

  return (
    <ServiceContext.Provider value={{
      taskService: new TaskService(db)
    }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
