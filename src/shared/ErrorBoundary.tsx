import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from './ui/button'

type Props = {
  children: ReactNode
  fallback?: ReactNode
}

type State = {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  handleReload = () => {
    window.location.reload()
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  reset = () => {
    this.setState({
      hasError: false,
      error: undefined,
    })
  }

  render(): ReactNode {
    const { hasError, error } = this.state

    if (!hasError) {
      return this.props.children
    }

    const isDev = import.meta.env.DEV

    return (
      this.props.fallback ?? (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>

          <p className="text-muted-foreground">
            An unexpected error occurred. You can try again or refresh the page.
          </p>

          {error?.message && (
            <p className="text-sm text-destructive font-mono">
              {error.message}
            </p>
          )}

          {isDev && error?.stack && (
            <details className="w-full max-w-2xl text-left">
              <summary className="cursor-pointer text-sm font-medium">
                Component stack
              </summary>
              <pre className="mt-2 whitespace-pre-wrap rounded-md bg-muted p-4 text-xs overflow-auto">
                {error?.stack}
              </pre>
            </details>
          )}

          <div className="flex gap-2">
            <Button onClick={this.reset}>Try again</Button>
            <Button variant="outline" onClick={this.handleReload}>
              Reload
            </Button>
          </div>
        </div>
      )
    )
  }
}
