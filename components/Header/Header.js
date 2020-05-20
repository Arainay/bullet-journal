import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTES } from '../../helpers/constants';
import styles from './header.module.scss';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.pageHeader}>
      {pathname !== ROUTES.TASKS && (
        <Link href={ROUTES.TASKS}>
          <img src="/icons/tasks.svg" alt="Tasks" className={styles.pageHeader__icon}/>
        </Link>
      )}
      {pathname !== ROUTES.IDEAS && (
        <Link href={ROUTES.IDEAS}>
          <img src="/icons/idea.svg" alt="Ideas" className={styles.pageHeader__icon}/>
        </Link>
      )}
      {pathname !== ROUTES.NOTES && (
        <Link href={ROUTES.NOTES}>
          <img src="/icons/notes.svg" alt="Notes" className={styles.pageHeader__icon}/>
        </Link>
      )}
      {pathname !== ROUTES.CALENDAR && (
        <Link href={ROUTES.CALENDAR}>
          <img src="/icons/calendar.svg" alt="Calendar" className={styles.pageHeader__icon}/>
        </Link>
      )}
      {pathname !== ROUTES.RESULT && (
        <Link href={ROUTES.RESULT}>
          <img src="/icons/result.svg" alt="Result" className={styles.pageHeader__icon}/>
        </Link>
      )}
    </header>
  );
};

export default Header;
