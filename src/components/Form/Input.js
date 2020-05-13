import React, { useContext } from 'react';
import classnames from '@app/helpers/classnames';
import { FormContext } from '@app/components/Form';
import './input.scss';

const Input = ({
  type = 'text',
  value = '',
  className,
  name,
  validate,
  ...props
}) => {
  const { errors, setErrors } = useContext(FormContext);

  const onChange = event => {
    if (!validate) {
      return;
    }

    if (validate(event.target.value)) {
      setErrors(errors => ({ ...errors, [name]: validate(event.target.value) }));
    }
  };

  return (
    <input
      {...props}
      type={type}
      id={name}
      name={name}
      defaultValue={value}
      onChange={onChange}
      className={classnames('input', className, errors[name] ? 'input__invalid' : null)}
    />
  );
};

export default Input;
