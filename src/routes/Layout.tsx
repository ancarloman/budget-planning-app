import { SidebarProvider } from '@/components/ui/sidebar'
import SideBar from '../components/layout/SideBar'
import TopBar from '../components/layout/TopBar'
import { Outlet } from '@tanstack/react-router'
import { NavItemsContext } from '@/context/NavItemsContext'
import { useEffect, useState } from 'react'

interface Portfolio {
  portfolio_id: string;
  title: string;
}

async function getSidebarPortfolios() {
  const res = await fetch("http://localhost:3001/api/sidebar/portfolios");

  if (!res.ok) {
    throw new Error("Failed to fetch portfolios");
  }

  return res.json();
}

function Layout() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  console.log("Portfolios in Layout:", portfolios);

  useEffect(() => {
    getSidebarPortfolios()
      .then(setPortfolios)
      .catch(console.error);
  }, []);

  return (
    <>
    <NavItemsContext.Provider value={portfolios}>
    <div className="flex min-h-screen w-screen bg-muted">
      
      {/* Sidebar */}
      <SidebarProvider>
      <SideBar navItems={portfolios}/>

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
