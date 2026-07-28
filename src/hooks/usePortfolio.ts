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

async function getPortfolioData(portfolioId: string) {
  const res = await fetch("http://localhost:3001/api/portfolio/" + portfolioId);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export function usePortfolio(portfolioId: number) {
    return useQuery({
        queryKey: ["portfolio", portfolioId],
        queryFn: () => getPortfolioData(portfolioId.toString()),
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
            // console.log("Mutation succeeded!");
            // console.log(
            // queryClient.getQueryData(["sidebar-portfolios"])
            // );
            // console.log(
            // queryClient.getQueryCache().getAll().map(q => q.queryKey)
            // );
            // console.log({
            //     routePortfolioId: portfolioId,
            //     newTitle: title,
            // });
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

                    // return old.map((portfolio) =>
                    //     portfolio.portfolio_id === portfolioId
                    //         ? {
                    //             ...portfolio,
                    //             title,
                    //         }
                    //         : portfolio
                    // );
                    return old.map((portfolio) => {
                        console.log({
                            cacheId: portfolio.portfolio_id,
                            routeId: portfolioId,
                            match: portfolio.portfolio_id === Number(portfolioId),
                        });

                        return portfolio.portfolio_id === Number(portfolioId)
                            ? { ...portfolio, title }
                            : portfolio;
                    });
                }
            );
        },
    });
}

export function useUpdatePortfolioAllottedBudget(portfolioId: string) {
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
                throw new Error("Failed to update allotted fund");
            }

            return response.json();
        },

        onSuccess: (_, allotted_fund) => {
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

