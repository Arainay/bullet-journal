import React from 'react';
import classnames from '@app/helpers/classnames';

const Form = ({ className, children, onSubmit, ...props }) => {
  const submit = event => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form
      {...props}
      className={classnames('form', className)}
      onSubmit={submit}
    >
      {children}
    </form>
  );
};

export default Form;
