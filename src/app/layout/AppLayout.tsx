import { Outlet } from 'react-router'
import { Header } from './Header'

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto p-(--space-lg)">
        <Outlet />
      </main>
    </div>
  )
}
