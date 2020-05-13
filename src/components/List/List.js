import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Form, { Input } from '@app/components/Form';
import Svg from '@app/components/Svg';
import createIcon from './assets/create.svg';
import './list.scss';

const List = ({ type = 'tasks' }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const toCreate = () => {
    push(`${pathname}/create`);
  };

  const search = event => {
    console.log(event.target['search'].value);
  };

  return (
    <article className="list">
      <h1 className="list__header">{type}</h1>
      <Form className="list__search" onSubmit={search}>
        <Input
          type="search"
          className="list__search-input"
          placeholder="Search"
          name="search"
        />
      </Form>

      <footer className="list__control">
        <Svg className="list__create" content={createIcon} onClick={toCreate}/>
      </footer>
    </article>
  );
};

export default List;
