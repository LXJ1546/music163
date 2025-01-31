// src/router->index.js  (配置路由映射)
import React, { lazy } from "react";

// 路由懒加载，动态导入
const Mine = lazy(() => import("@/pages/mine"));
const Focus = lazy(() => import("@/pages/focus"));
const Download = lazy(() => import("@/pages/download"));
const Discover = lazy(() => import("@/pages/discover"));
const Recommend = lazy(() => import("@/pages/discover/c-views/recommend"));
const Songs = lazy(() => import("@/pages/discover/c-views/songs"));
const Ranking = lazy(() => import("@/pages/discover/c-views/ranking"));
const Djradio = lazy(() => import("@/pages/discover/c-views/djradio"));
const Artist = lazy(() => import("@/pages/discover/c-views/artist"));
const Album = lazy(() => import("@/pages/discover/c-views/album"));

const routes = [
  {
    path: "/",
    element: <Discover />,
    children: [
      {
        index: true, // 表示默认子路由
        element: <Recommend />, // 默认展示 Recommend 组件
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/songs",
        element: <Songs />,
      },
      {
        path: "/discover/ranking",
        element: <Ranking />,
      },
      {
        path: "/discover/djradio",
        element: <Djradio />,
      },
      {
        path: "/discover/artist",
        element: <Artist />,
      },
      {
        path: "/discover/album",
        element: <Album />,
      },
    ],
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/download",
    element: <Download />,
  },
];

export default routes;
