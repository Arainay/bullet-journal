import React from 'react';
import Form, { Input } from '@app/components/Form';
import './list.scss';

const List = ({ type = 'tasks' }) => {
  return (
    <article className="list">
      <h1 className="list__header">{type}</h1>
      <Form className="list__search">
        <Input type="search" className="list__search-input"/>
      </Form>

      <footer className="list__control">

      </footer>
    </article>
  );
};

export default List;
