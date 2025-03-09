import React, { Component } from "react";
import {
  Container,
  Message,
  ErrorDetails,
  RetryButton,
} from "./ErrorBoundary.styles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Message>Something went wrong.</Message>
          <ErrorDetails>{this.state.error?.message}</ErrorDetails>
          <RetryButton onClick={this.handleReset}>Try Again</RetryButton>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
