import React, { Component, ReactNode, Suspense } from 'react';

interface Props {
  children: ReactNode;
  onError: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch() {
    // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.props.onError}</h1>;
    }

    return <>{this.props.children}</>;
  }
}

interface LoadingAndErrorProps {
  errorFallback: ReactNode;
  loadingFallback: ReactNode;
  children: ReactNode;
}

function LoadingAndError({ errorFallback, loadingFallback, children }: LoadingAndErrorProps) {
  return (
    <ErrorBoundary onError={errorFallback}>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default LoadingAndError;
