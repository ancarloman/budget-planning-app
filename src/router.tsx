import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
// import { routeTree } from './routeTree.gen'
import Layout from './routes/Layout'
import React from 'react';
import { Spinner } from './components/ui/Loader';

const DashboardPage = React.lazy(() => import('./routes/Dashboard'));


const RootRoute = createRootRoute({
  component: Layout,
});

// const _DashboardRoute = createRoute({
//   getParentRoute: () => RootRoute,
//   path: '/',
//  });

 // --- Routes ------------------------------------------------
 const DashboardRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: () => (
    <React.Suspense fallback={<Spinner />}>
      <DashboardPage />
    </React.Suspense>
  ),
});

 const routeTree = RootRoute.addChildren([
  DashboardRoute,
]);

export const router = createRouter({ routeTree }); 

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }
