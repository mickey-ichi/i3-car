import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/Button';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
    </>
  );
}
