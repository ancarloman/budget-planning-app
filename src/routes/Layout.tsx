import SideBar from '../components/layout/SideBar'
import TopBar from '../components/layout/TopBar'
import { Outlet } from '@tanstack/react-router'

function Layout() {
  return (
    <>
    <div className="flex min-h-screen w-screen bg-muted">
      
      {/* Sidebar */}
      <SideBar />

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />

        <main className="flex-1 overflow-auto bg-base-200">
          <Outlet />
        </main>
      </div>
    </div>
    </>
  )
}

export default Layout
