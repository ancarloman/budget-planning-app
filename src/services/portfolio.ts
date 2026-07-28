
export async function getSidebarPortfolios() {
  const res = await fetch("http://localhost:3001/api/sidebar/portfolios");

  if (!res.ok) {
    throw new Error("Failed to fetch portfolios");
  }

  return res.json();
}