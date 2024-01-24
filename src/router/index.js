// src/router->index.js  (配置路由映射)
import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Mine = lazy(() => import('@/pages/mine'));
const Focus = lazy(() => import('@/pages/focus'));
const Download = lazy(() => import('@/pages/download'));
const Discover = lazy(() => import('@/pages/discover'));
const Recommend = lazy(() => import('@/pages/discover/c-views/recommend'));
const Songs = lazy(() => import('@/pages/discover/c-views/songs'));
const Ranking = lazy(() => import('@/pages/discover/c-views/ranking'));
const Djradio = lazy(() => import('@/pages/discover/c-views/djradio'));
const Artist = lazy(() => import('@/pages/discover/c-views/artist'));
const Album = lazy(() => import('@/pages/discover/c-views/album'));

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover/>,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        element: <Recommend />
      },
      {
        path: "/discover/songs",
        element: <Songs />
      },
      {
        path: "/discover/ranking",
        element: <Ranking />
      },
      {
        path: "/discover/djradio",
        element: <Djradio />
      },
      {
        path: "/discover/artist",
        element: <Artist />
      },
      {
        path: "/discover/album",
        element: <Album />
      }
    ]
  },
  {
    path: "/mine",
    element: <Mine />
  },
  {
    path: "/focus",
    element: <Focus />
  },
  {
    path: "/download",
    element: <Download />
  }
];

export default routes;
