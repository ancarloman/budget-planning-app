import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { SidebarPortfolio } from "./useSidebarPortfolio";

export type Portfolio = {
    portfolio_id: number
    title: string
    description: string
    account_id: number
    allotted_fund: number
    budgeted_fund: number
    spent_fund: number
    completed: boolean | 0 | 1
    archived: boolean | 0 | 1
    created_at: string
}

export interface Item {
  item_id: number
  title: string
  quantity: number
  price: number
  spent: number | 0 | 1
  transaction_id: number
  portfolio_id: number
  created_at: string
}

interface AddItemRequest {
  title: string;
  quantity: number;
  price: number;
  portfolioId: number;
}

interface DeleteItemRequest {
  itemId: number;
  portfolioId: number;
}

async function getPortfolioData(portfolioId: number) {
  const res = await fetch("http://localhost:3001/api/portfolio/" + portfolioId);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export function usePortfolio(portfolioId: number) {
    return useQuery({
        queryKey: ["portfolio", portfolioId],
        queryFn: () => getPortfolioData(portfolioId),
    });
}

async function getPortfolioItems(portfolioId: number): Promise<Item[]> {
  const res = await fetch("http://localhost:3001/api/portfolio/items/" + portfolioId);

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
}

export function usePortfolioItems(portfolioId: number) {
    return useQuery({
        queryKey: ["portfolio-items", portfolioId],
        queryFn: () => getPortfolioItems(portfolioId),
    });
}


async function addItem(item: AddItemRequest) {
  const res = await fetch(
    "http://localhost:3001/api/portfolio/items/add-item",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to add item");
  }

  return res.json();
}

export function useAddItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addItem,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["portfolio-items", variables.portfolioId],
      });
    },
  });
}

async function deleteItemMutation({ itemId }: DeleteItemRequest) {
  const res = await fetch(
    `http://localhost:3001/api/portfolio/items/delete-item/${itemId}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete item");
  }

  return res.json();
}

export function useDeleteItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteItemMutation,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["portfolio-items", variables.portfolioId],
      });
    },
  });
}

export function useUpdatePortfolioTitle(portfolioId: number) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (title: string) => {
            const response = await fetch(
                `http://localhost:3001/api/portfolio/${portfolioId}/new-title`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update title");
            }

            return response.json();
        },

        onSuccess: (_, title) => {
            queryClient.setQueryData(
                ["portfolio", portfolioId],
                (old: Portfolio | undefined) =>
                    old
                        ? {
                            ...old,
                            title,
                        }
                        : old
            );
            
            queryClient.setQueryData(
                ["sidebar-portfolios"],
                (old: SidebarPortfolio[] | undefined) => {
                    if (!old) return old;

                    return old.map((portfolio) => {
                        // console.log({
                        //     cacheId: portfolio.portfolio_id,
                        //     routeId: portfolioId,
                        //     match: portfolio.portfolio_id === Number(portfolioId),
                        // });

                        return portfolio.portfolio_id === Number(portfolioId)
                            ? { ...portfolio, title }
                            : portfolio;
                    });
                }
            );
        },
    });
}

export function useUpdatePortfolioAllottedBudget(portfolioId: number) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (allotted_fund: number) => {
            const response = await fetch(
                `http://localhost:3001/api/portfolio/${portfolioId}/new-allotted-fund`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ allotted_fund }),
                }
            );

            if (!response.ok) {
                // console.log("Failed to update allotted fund:", response.status, response.statusText);
                throw new Error("Failed to update allotted fund");
            }

            return response.json();
        },

        onSuccess: (_, allotted_fund) => {
            // console.log("setting cache to", allotted_fund);   debugging line
            queryClient.setQueryData(
                ["portfolio", portfolioId],
                (old: Portfolio | undefined) =>
                    old
                        ? {
                              ...old,
                              allotted_fund,
                          }
                        : old
            );

        },
    });
}

