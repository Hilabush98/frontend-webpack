//import Button from 'federation_provider/button'
import React, { Suspense, lazy } from 'react';

const Login = lazy(() => import('federation_provider/components').then(module => ({ default: module.Login })));

const App = () => {
  return (
    <>
    <Login HeaderText ="Header Modificado" FooterText='Footer Modificado'/>
    </>
    
  );
};

export default App;
