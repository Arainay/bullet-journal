import React, { createContext, useContext, useEffect, useState } from 'react';
import { ServiceContext } from '@app/services';
import { STATUSES } from './constants';

export const TasksContext = createContext({});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { taskService } = useContext(ServiceContext);

  const getTasks = () => tasks;

  const getCompletedTasks = () => tasks.filter(item => item.status === STATUSES.COMPLETED);

  const getPendingTasks = () => tasks.filter(item => item.status === STATUSES.PENDING);

  const getRemainingTasks = () => tasks.filter(item => item.status === STATUSES.REMAINING);

  const addTask = task => {
    setTasks(tasks => [...tasks, task]);
  };

  const updateTask = task => {
    setTasks(tasks => {
      const index = tasks.findIndex(item => item.id === task.id);

      if (index < 0) {
        return [...tasks, task];
      }

      tasks.splice(index, 1, task);

      return tasks;
    });
  };

  const deleteTask = task => {
    setTasks(tasks => tasks.filter(item => item.id !== task.id));
  };

  useEffect(() => {
    taskService.getTasks()
      .then(tasks => {
        setTasks(tasks);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        console.log('finally');
      });
  }, []);

  return (
    <TasksContext.Provider
      value={{
        getTasks,
        getCompletedTasks,
        getPendingTasks,
        getRemainingTasks,
        addTask,
        updateTask,
        deleteTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
