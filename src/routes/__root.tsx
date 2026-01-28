import { Outlet, createRootRoute, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div style={{ padding: 24 }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 12 }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </div>
  )
}
