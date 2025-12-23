import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  error: Error | null;
  errorInfo?: React.ErrorInfo;
  lastUnhandled?: unknown;
};

export class GlobalErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Keep console logging to make it visible in Preview logs
    console.error("[GlobalErrorBoundary] React error:", error);
    console.error("[GlobalErrorBoundary] Component stack:", errorInfo?.componentStack);
    this.setState({ errorInfo });
  }

  componentDidMount() {
    window.addEventListener("error", this.onWindowError);
    window.addEventListener("unhandledrejection", this.onUnhandledRejection);
  }

  componentWillUnmount() {
    window.removeEventListener("error", this.onWindowError);
    window.removeEventListener("unhandledrejection", this.onUnhandledRejection);
  }

  private onWindowError = (event: ErrorEvent) => {
    console.error("[GlobalErrorBoundary] window.error:", event.error || event.message);
    if (event.error instanceof Error) {
      this.setState({ error: event.error });
    } else {
      this.setState({
        error: new Error(typeof event.message === "string" ? event.message : "Unknown error"),
        lastUnhandled: event.error,
      });
    }
  };

  private onUnhandledRejection = (event: PromiseRejectionEvent) => {
    console.error("[GlobalErrorBoundary] unhandledrejection:", event.reason);
    const reason = event.reason;
    const err = reason instanceof Error ? reason : new Error(String(reason));
    this.setState({ error: err, lastUnhandled: reason });
  };

  render() {
    if (!this.state.error) return this.props.children;

    const { error, errorInfo } = this.state;

    return (
      <main className="min-h-screen bg-background text-foreground">
        <section className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-12">
          <header className="space-y-2">
            <h1 className="text-2xl font-semibold">Приложение не загрузилось</h1>
            <p className="text-sm text-muted-foreground">
              В превью произошла ошибка JS. Ниже — текст ошибки, чтобы быстро найти причину.
            </p>
          </header>

          <article className="rounded-lg border bg-card p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-medium">Ошибка</h2>
            <pre className="whitespace-pre-wrap break-words text-sm text-foreground">
              {error.message}
            </pre>
          </article>

          {errorInfo?.componentStack ? (
            <article className="rounded-lg border bg-card p-4 shadow-sm">
              <h2 className="mb-2 text-sm font-medium">Component stack</h2>
              <pre className="whitespace-pre-wrap break-words text-xs text-muted-foreground">
                {errorInfo.componentStack}
              </pre>
            </article>
          ) : null}

          <p className="text-xs text-muted-foreground">
            Если экран белый только у вас: часто виноваты блокировщики (AdBlock) или запрет
            сторонних скриптов.
          </p>
        </section>
      </main>
    );
  }
}
