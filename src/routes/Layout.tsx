import { SidebarProvider } from '@/components/ui/sidebar'
import SideBar from '../components/layout/SideBar'
import TopBar from '../components/layout/TopBar'
import { Outlet } from '@tanstack/react-router'
import { NavItemsContext } from '@/context/NavItemsContext'
import { useSidebarPortfolio } from '@/hooks/useSidebarPortfolio'


function Layout() {
  const { data: portfolios = [], isLoading, error } = useSidebarPortfolio();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong.</div>;
  }

  const sidebarItems = portfolios.map((portfolio) => ({
    portfolio_id: portfolio.portfolio_id.toString(),
    title: portfolio.title,
  }));

  
  return (
    <>
    <NavItemsContext.Provider value={portfolios}>
    <div className="flex min-h-screen w-screen bg-muted">
      
      {/* Sidebar */}
      <SidebarProvider>
      <SideBar navItems={sidebarItems}/>

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0 min-h-0">
        <TopBar />

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
