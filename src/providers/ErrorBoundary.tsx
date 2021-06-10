import React, { Component, ErrorInfo, ReactNode } from 'react';
import { InternalError } from '@/pages/InternalErrorPage/InternalError.page';
import { ErrorProps, withError } from '@/utils/hocs/with-error';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}
class ErrorBoundary extends Component<Props & ErrorProps, State> {
  constructor(props: Props & ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(e: Error): State {
    return { hasError: !!e };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const { setError } = this.props;
    setError({ error, hasError: true, errorInfo });

    this.setState(prevState => ({ ...prevState, error, errorInfo }));
  }

  public render(): ReactNode {
    const { hasError } = this.state;

    const { children } = this.props;
    return hasError ? <InternalError /> : children;
  }
}

export default withError(ErrorBoundary);
