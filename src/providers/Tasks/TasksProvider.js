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

  const getMigratedTasks = () => tasks.filter(item => item.status === STATUSES.MIGRATED);

  const getImportantTasks = () => tasks.filter(item => item.status === STATUSES.IMPORTANT);

  const getCanceledTasks = () => tasks.filter(item => item.status === STATUSES.CANCELED);

  const addTask = task => {
    taskService.addTask(task)
      .then(() => {
        setTasks(tasks => [...tasks, task]);
      });
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
        getMigratedTasks,
        getImportantTasks,
        getCanceledTasks,
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
