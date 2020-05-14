import React, { useContext } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { TasksContext } from '@app/providers/Tasks';
import Form, { Input } from '@app/components/Form';
import './add-task.scss';

const AddTask = () => {
  const { addTask } = useContext(TasksContext);

  const add = event => {
    const task = {
      name: event.target['name'].value,
      important: event.target['important'].checked,
      startDate: Date.parse(event.target['beginningDate'].value),
      endDate: Date.parse(event.target['finishTo'].value),
      createdAt: Date.now()
    };

    addTask(task);
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
          defaultValue="2017-05-24"
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
          defaultValue="2017-05-25"
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
