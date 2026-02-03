import { SidebarProvider } from '@/components/ui/sidebar'
import SideBar from '../components/layout/SideBar'
import TopBar from '../components/layout/TopBar'
import { Outlet } from '@tanstack/react-router'
import { NavItemsContext } from '@/context/NavItemsContext'

function Layout() {
  const navItems = [
    {
      name: "Project 1",
      to: "/project-1",
    },
    {
      name: "Project 2",
      to: "/project-2",
    },
    {
      name: "Project 3",
      to: "/project-3",
    }
  ]

  return (
    <>
    <NavItemsContext.Provider value={navItems}>
    <div className="flex min-h-screen w-screen bg-muted">
      
      {/* Sidebar */}
      <SidebarProvider>
      <SideBar navItems={navItems}/>

      {/* Main area */}
      <div className="flex flex-col h-full flex-1 min-w-0">
        <TopBar />

        {/* <main className="flex-1 overflow-auto bg-base-200"> */}
        <div className="p-8 h-full">
          <Outlet />
        </div>
      </div>
      </SidebarProvider>
    </div>
    </NavItemsContext.Provider>
    </>
  )
}

export default Layout
