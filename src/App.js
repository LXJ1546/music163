import React, { memo, Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/index";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import AppPlayerBar from "./pages/player/app-player-bar";
import { useDispatch } from "react-redux";
import { fetchCurrentSongAction } from "./pages/player/store/player";

export default memo(function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // 通过dispatch发送action
    dispatch(fetchCurrentSongAction(29393634));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <AppHeader />
      {/* 路由懒加载占位 */}
      <Suspense fallback={<div style={{width:'auto',height:'100vh'}}></div>}>
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <AppPlayerBar />
    </div>
  );
});
