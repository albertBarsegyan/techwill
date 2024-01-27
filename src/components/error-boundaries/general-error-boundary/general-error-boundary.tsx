import { Component, ErrorInfo } from "react";
import { ComponentWithChildren } from "../../../types/component-types.ts";

export class GeneralErrorBoundary extends Component<ComponentWithChildren> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <div>Error Happened</div>;
    }

    return this.props.children;
  }
}
