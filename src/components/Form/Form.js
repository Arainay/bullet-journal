import React, { createContext, useState } from 'react';
import classnames from '@app/helpers/classnames';

export const FormContext = createContext({});

const Form = ({ className, children, onSubmit, ...props }) => {
  const [errors, setErrors] = useState({});

  const submit = event => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <FormContext.Provider value={{ errors, setErrors }}>
      <form
        {...props}
        className={classnames('form', className)}
        onSubmit={submit}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
