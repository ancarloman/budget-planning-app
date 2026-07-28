import { useQuery } from "@tanstack/react-query";

export interface SidebarPortfolio {
  portfolio_id: number;
  title: string;
}

async function getSidebarPortfolios(): Promise<SidebarPortfolio[]> {
  const res = await fetch("http://localhost:3001/api/sidebar/portfolios");

  if (!res.ok) {
    throw new Error("Failed to fetch portfolios");
  }

  return res.json();
}

export function useSidebarPortfolio() {
  return useQuery({
    queryKey: ["sidebar-portfolios"],
    queryFn: getSidebarPortfolios,
  });
}

