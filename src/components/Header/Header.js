import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Svg from '@app/components/Svg';
import taskIcon from './assets/tasks.svg';
import ideaIcon from './assets/idea.svg';
import calendarIcon from './assets/calendar.svg';
import noteIcon from './assets/notes.svg';
import resultIcon from './assets/result.svg';
import './header.scss';
import { ROUTES } from '@app/helpers/constants';

const Header = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const to = (url) => () => {
    push(url);
  };

  return (
    <header className="page-header">
      {pathname !== ROUTES.TASKS && (
        <Svg content={taskIcon} className="page-header__icon" onClick={to(ROUTES.TASKS)}/>
      )}
      {pathname !== ROUTES.IDEAS && (
        <Svg content={ideaIcon} className="page-header__icon" onClick={to(ROUTES.IDEAS)}/>
      )}
      {pathname !== ROUTES.NOTES && (
        <Svg content={noteIcon} className="page-header__icon" onClick={to(ROUTES.NOTES)}/>
      )}
      {pathname !== ROUTES.CALENDAR && (
        <Svg content={calendarIcon} className="page-header__icon" onClick={to(ROUTES.CALENDAR)}/>
      )}
      {pathname !== ROUTES.RESULT && (
        <Svg content={resultIcon} className="page-header__icon" onClick={to(ROUTES.RESULT)}/>
      )}
    </header>
  );
};

export default Header;
