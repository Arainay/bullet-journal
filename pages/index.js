import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '../helpers/constants';

const Home = () => {
  const { push } = useRouter();

  useEffect(() => {
    push(ROUTES.TASKS);
  }, []);


  return null;
};

export default Home;
