import React, { useContext } from 'react';
import { TasksContext } from '@app/providers/Tasks';
import List from '@app/components/List';

const Tasks = () => {
  const { getTasks } = useContext(TasksContext);

  const tasks = getTasks();

  return (
    <List type="tasks" data={tasks}/>
  );
};

export default Tasks;
