import { SidebarProvider } from '@/components/ui/sidebar'
import SideBar from '../components/layout/SideBar'
import TopBar from '../components/layout/TopBar'
import { Outlet } from '@tanstack/react-router'
import { NavItemsContext } from '@/context/NavItemsContext'

function Layout() {
  const navItems = [
    {
      portfolioId: "hello girl",
      name: "Project 1",
    },
    {
      portfolioId: "2",
      name: "Project 2",
    },
    {
      portfolioId: "3",
      name: "Project 3",
    },
    {
      portfolioId: "4",
      name: "Project 4",
    },
    {
      portfolioId: "5",
      name: "Project 5",
    },
    {
      portfolioId: "6",
      name: "Project 6",
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
      <div className="flex flex-col flex-1 min-w-0 min-h-0">
        <TopBar />

        {/* <main className="flex-1 overflow-auto bg-base-200"> */}
        <div className="flex-1 min-h-0 overflow-hidden p-8">
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
