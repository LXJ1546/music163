import React, { memo, Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router/index';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppPlayerBar from './pages/player/app-player-bar';
import { useDispatch } from 'react-redux';
import { fetchCurrentSongAction } from './pages/player/store/player';

export default memo(function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchCurrentSongAction(29393634))
  },[])
  return (
    <div>
      <AppHeader/>
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter/>
      <AppPlayerBar/>
    </div>
  );
});

