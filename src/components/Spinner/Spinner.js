import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './spinner.scss';

const Spinner = () => (
  <div className="spinner">
    <CircularProgress size={100}/>
  </div>
);

export default Spinner;
