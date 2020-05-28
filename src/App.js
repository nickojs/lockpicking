import React from 'react';
import routes from './routes/routes';
import Navbar from './components/navbar/navbar';

const app = () => (
  <>
    <Navbar />
    {routes}
  </>
);

export default app;
