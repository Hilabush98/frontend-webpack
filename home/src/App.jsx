//import Button from 'federation_provider/button'
import React, { Suspense, lazy } from 'react';

const Home = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.Home,
  })),
);

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
