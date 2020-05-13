import React from 'react';
import classnames from '@app/helpers/classnames';
import './input.scss';

const Input = ({ type = 'text', className, name, ...props }) => (
  <input
    {...props}
    type={type}
    id={name}
    name={name}
    className={classnames('input', className)}
  />
);

export default Input;
