import { useQuery } from "@tanstack/react-query";

async function updateItemQty(portfolioId: number, itemId: number, quantity: number) {
  const res = await fetch(`http://localhost:3001/api/portfolio/items/${portfolioId}/${itemId}/update-quantity`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  });

  if (!res.ok) {
    throw new Error("Failed to update portfolio item quantity");
  }

  return res.json();
}

export function useUpdateItemQty(portfolioId: number, itemId: number, quantity: number) {
    return useQuery({
        queryKey: ["item-qty", portfolioId],
        queryFn: () => updateItemQty(portfolioId, itemId, quantity),
    });
}