import { createBrowserRouter } from 'react-router-dom';
import LazyLoad from './config/lazyLoad';
import React from 'react';


// 官方文档：https://reactrouter.com/en/main/routers/router-provider
const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: LazyLoad(React.lazy(() => import('/@/pages/timeFlip'))),
      },
    ],
  },
]);
export default router;