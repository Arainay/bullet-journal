import React from 'react';
import classnames from '@app/helpers/classnames';

const Form = ({ className, children, onSubmit, ...props }) => {
  return (
    <form
      {...props}
      className={classnames('form', className)}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
