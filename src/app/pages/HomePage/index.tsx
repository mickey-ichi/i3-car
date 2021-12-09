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
      <Button
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        color={'red'}
        border={'1px solid red'}
        margin={'10'}
      >
        <div>icon</div>
        <div>text</div>
      </Button>
    </>
  );
}
