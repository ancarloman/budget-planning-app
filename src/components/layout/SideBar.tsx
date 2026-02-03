import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Link } from '@tanstack/react-router';

export type NavItem = {
  name: string;
  to?: string;
}

interface SidebarProps {
  navItems: NavItem[];
}

function SideBar({ navItems }: SidebarProps) {
  return (
    <> 
      <Sidebar>
        <SidebarHeader>
          <h1 className="text-2xl text-center font-bold italic py-4">Portfolio</h1>
        </SidebarHeader>

        <SidebarContent>  
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <Link to={item.to || "/"}>
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

        </SidebarContent>

      </Sidebar>
    </>
    
  )
}

export default SideBar;
