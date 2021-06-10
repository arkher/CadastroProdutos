/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setErrorInfo,
  applicationErrorState,
} from '@/providers/redux/reducers/applicationError.reducer';
import { RootState } from '@/rootReducer';

type WithErrorProps = {
  setError: (err: applicationErrorState) => void;
};

export type ErrorProps = WithErrorProps & applicationErrorState;

export const withError = (Component: any) => {
  return (props: any): React.ReactElement => {
    const dispatch = useDispatch();
    const { hasError, error, errorInfo } = useSelector(
      (state: RootState) => state.applicationErrorState,
    );

    const setError = (err: applicationErrorState): void => {
      dispatch(setErrorInfo(err));
    };

    return (
      <Component
        {...props}
        hasError={hasError}
        error={error}
        errorInfo={errorInfo}
        setError={setError}
      />
    );
  };
};
