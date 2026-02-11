import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Card, CardContent, CardFooter } from "../ui/card";

type Transaction = {
    id: number
    date: string
    title: string
    description?: string
    amount: string
}
const PAGE_SIZE = 10

function TransactionTable() {
    const transactions: Transaction[] = Array.from({ length: 87 }).map((_, i) => ({
    id: i + 1,
    date: "Feb 15, 2026",
    title: "Snacks",
    description: i % 2 === 0 ? "Project related expense" : undefined,
    amount: "-$305.50",
    }))

    const [page, setPage] = useState(1)

    const totalPages = Math.ceil(transactions.length / PAGE_SIZE)

    const paginatedRows = transactions.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    )

    return (
        <>
        <div className="mt-8 p-2 rounded-md bg-foreground">
            <h2 className="font-medium text-center text-accent italic">Transaction History</h2>
        </div>
        <Card className="border-0 mt-4">
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-50">Date</TableHead>
                <TableHead>Details</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {paginatedRows.map((tx) => (
                <TableRow key={tx.id}>
                    <TableCell className="font-thin">
                    {tx.date}
                    </TableCell>

                    <TableCell>
                    <div className="flex flex-col gap-1">
                        <span className="font-thin leading-tight">
                        {tx.title}
                        </span>
                        {tx.description && (
                        <p className="font-thin text-xs text-muted-foreground">
                            {tx.description}
                        </p>
                        )}
                    </div>
                    </TableCell>

                    <TableCell className="text-right">
                    {tx.amount}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </CardContent>

        {totalPages > 1 && (
            <CardFooter className="border-t flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Page {page} of {totalPages}
            </span>

            <Pagination>
                <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className={page === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNumber = i + 1
                    return (
                    <PaginationItem key={pageNumber}>
                        <PaginationLink
                        isActive={page === pageNumber}
                        onClick={() => setPage(pageNumber)}
                        >
                        {pageNumber}
                        </PaginationLink>
                    </PaginationItem>
                    )
                })}

                <PaginationItem>
                    <PaginationNext
                    onClick={() =>
                        setPage((p) => Math.min(totalPages, p + 1))
                    }
                    className={
                        page === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                    />
                </PaginationItem>
                </PaginationContent>
            </Pagination>
            </CardFooter>
        )}
        </Card>

        </>
    );

}

export default TransactionTable;