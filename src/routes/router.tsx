import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';

import AppLayout from 'src/layout/appLayout';

import { IRouter, ROUTES } from './routes';

const Router = () => {
  const getMappedRoutes = (routes: IRouter) => {
    return Object.keys(routes).map((routeKey) => {
      const { title, path, element: Element, ...restRouteProps } = routes[routeKey];

      return (
        <Route
          key={routeKey}
          path={restRouteProps.index ? undefined : path}
          {...restRouteProps}
          element={<Element title={title} />}
        />
      );
    });
  };

  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {getMappedRoutes(ROUTES)}
        </Route>
      </Routes>
    </NativeRouter>
  );
};

export default Router;
