import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
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
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트합니다.
    return { hasError: true };
  }

  componentDidCatch() {
    // 에러기록은 여기서. 할 수 있습니다.
    // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>오류가 발생했습니다.</h1>;
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
