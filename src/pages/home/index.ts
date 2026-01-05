import { lazy } from 'react'

export const HomePage = lazy(() =>
  import('./ui/HomePage').then(({ HomePage }) => ({ default: HomePage })),
)
