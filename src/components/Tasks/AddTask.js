import React, { useContext } from 'react';
import { TasksContext } from '@app/providers/Tasks';
import Form, { Input } from '@app/components/Form';

const AddTask = () => {
  // eslint-disable-next-line no-unused-vars
  const { addTask } = useContext(TasksContext);

  const add = event => {
    const [name] = event.target;

    console.log(name.value);
  };

  return (
    <Form className="add-task" onSubmit={add}>
      <Input className="add-task__input add-task__name" name="name"/>
    </Form>
  );
};

export default AddTask;
