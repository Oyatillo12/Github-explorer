import { Suspense } from 'react'
import { ErrorBoundary } from '@/shared/ErrorBoundary'
import { BrowserRouter } from 'react-router'
import { QueryProvider } from './providers/QueryProvider'
import { Router } from './router'

export const App = () => {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="p-(--space-lg) text-center">Loading...</div>
            }
          >
            <Router />
          </Suspense>
        </BrowserRouter>
      </QueryProvider>
    </ErrorBoundary>
  )
}
