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
  const accentCombos = [
    { bg: "sidebar-1", fg: "sidebar-foreground-yellow" },
    { bg: "sidebar-2", fg: "sidebar-foreground-yellow" },
    { bg: "sidebar-3", fg: "sidebar-foreground-purple" },
    { bg: "sidebar-4", fg: "sidebar-foreground-purple" },
    { bg: "sidebar-5", fg: "sidebar-foreground-orange" },
  ];

  return (
    <Sidebar className="w-64">
      <SidebarHeader>
        <h1 className="text-4xl text-center text-foreground font-bold italic py-4">Portfolio</h1>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item, idx) => {
                const combo = accentCombos[idx % accentCombos.length];

                return (
                  <SidebarMenuItem
                    key={item.name}
                    className="min-h-10"
                    style={{
                      backgroundColor: `var(--${combo.bg})`,
                      color: `var(--${combo.fg})`,
                      borderRadius: "var(--radius-lg)",
                    } as React.CSSProperties}
                  >
                    <SidebarMenuButton  className="min-h-10" asChild>
                      <Link to={item.to || "/"}>
                        <span className="font-bold">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}


export default SideBar;