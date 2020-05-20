import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { ROUTES } from '@app/helpers/constants';
import { TasksContext } from '@app/providers/Tasks';
import Form, { Input } from '@app/components/Form';
import './add-task.scss';

const AddTask = () => {
  const { addTask } = useContext(TasksContext);

  const { push } = useHistory();

  const add = async event => {
    const task = {
      name: event.target['name'].value,
      important: event.target['important'].checked,
      startDate: Date.parse(event.target['beginningDate'].value),
      endDate: Date.parse(event.target['finishTo'].value),
      createdAt: Date.now()
    };

    await addTask(task);
    push(ROUTES.TASKS);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const toString = num => num.toString().length === 1 ? `0${num}` : num.toString();

    return `${year}-${toString(month)}-${toString(day)}`;
  };

  return (
    <Form className="add-task" onSubmit={add}>
      <fieldset className="add-task__fieldset add-task__header">
        <Input className="add-task__name" name="name"/>
        <FormControlLabel
          control={
            <Checkbox
              name="important"
              color="primary"
            />
          }
          label="Important"
        />
      </fieldset>
      <fieldset className="add-task__fieldset add-task__description">
        <textarea className="add-task__description"/>
      </fieldset>
      <fieldset className="add-task__fieldset add-task__date">
        <TextField
          type="date"
          defaultValue={getCurrentDate()}
          className="add-task__date-picker"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          label="Beginning date"
          name="beginningDate"
          id="beginningDate"
        />
        <TextField
          type="date"
          defaultValue={getCurrentDate()}
          className="add-task__date-picker"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          label="Finish to"
          name="finishTo"
          id="finishTo"
        />
      </fieldset>
      <fieldset className="add-task__fieldset add-task__controls">
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </fieldset>
    </Form>
  );
};

export default AddTask;
