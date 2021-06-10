import React from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import { AccessNotAllowed } from '@/pages/accessNotAllowed';
import { validateRoles } from './validations/role_validation';

export type PrivateRouteProps = {
  children: React.ReactElement;
  allowedRoles: string[];
};

const PrivateRoute: React.FC<PrivateRouteProps & RouteProps> = (
  props: PrivateRouteProps & RouteProps,
) => {
  const { children, allowedRoles } = props;

  const userRoles = ['user'];

  const hasRole = validateRoles(allowedRoles, userRoles);

  const location = useLocation();

  const isAuthorized = () => true;

  const redirectManager = () => {
    if (!isAuthorized()) {
      localStorage.setItem(
        'redirectRoute',
        location.pathname + location.search,
      );
      return <Redirect to="/" />;
    }

    if (userRoles.length === 0 || !hasRole) {
      return <AccessNotAllowed />;
    }

    return children;
  };

  return <Route render={redirectManager} />;
};

export { PrivateRoute };
