import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from '../Header';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <title>Bullet Journal</title>
    </Head>
    <div className={styles.wrapper}>
      <Header/>
      {children}
    </div>
  </Fragment>
);

export default Layout;
