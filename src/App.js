import React, { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router/index';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

export default memo(function App() {
  return (
    <div>
      <AppHeader/>
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter/>
    </div>
  );
});

