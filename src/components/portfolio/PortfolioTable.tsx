import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import EditableCell from "../helper/editable-cell"
import { Delete, Plus } from "lucide-react"
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react"
import { Card } from "../ui/card"
import { Button } from "@/components/ui/button"
import { useAddItem, useDeleteItem, usePortfolio, usePortfolioItems, type Item } from "@/hooks/usePortfolio"
import { useQueryClient } from "@tanstack/react-query"

interface EditableDataTableProps {
  portfolioId: number;
  // allottedFund: number;
}

export const columns: ColumnDef<Item>[] = [
  {
    id: "checked",
    header: "",
    cell: ({ row, table }) => (
      <Checkbox
        checked={row.original.spent === 1}
        onCheckedChange={(v) =>
          table.options.meta?.updateData(row.index,
      "spent",
      v ? 1 : 0)
        }
      />
    ),
  },
  {
    accessorKey: "entry",
    header: "Entry",
    cell: ({ row, column, table }) => (
      <EditableCell
        value={row.original.title}
        onSave={(v) =>
          table.options.meta?.updateData(row.index, column.id, v)
        }
      />
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row, column, table }) => (
      <EditableCell
        type="number"
        value={row.original.quantity}
        onSave={(v) =>
          table.options.meta?.updateData(row.index, column.id, v)
        }
      />
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row, column, table }) => (
      <EditableCell
        type="number"
        value={row.original.price}
        onSave={(v) =>
          table.options.meta?.updateData(row.index, column.id, v)
        }
      />
    ),
  },
  {
    id: "subtotal",
    header: "Sub Total",
    cell: ({ row }) => {
      const { quantity, price, spent } = row.original
      const subtotal = quantity * price

      return (
        <div className="text-right">        
        <span
          className={spent ? "line-through text-muted-foreground" : ""}
        >
          {subtotal.toFixed(2)}
        </span>
        </div>
      )
    },
  },
  {
    id: "action",
    header: "",
    cell: ({row, table}) => {
      return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost">
              <Delete className="text-red-300" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure to delete item <span className="italic text-red-300">{row.original.title}</span>?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-red-300" onClick={async () => {
                await table.options.meta?.deleteRow(row.original.item_id);
              }}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    },
  },
]


export function EditableDataTable({ portfolioId }: EditableDataTableProps) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const { data: portfolio } = usePortfolio(portfolioId);
  const { data: items = [] } = usePortfolioItems(portfolioId);
          
  const deleteItemMutation = useDeleteItem();
  const addItemMutation = useAddItem();
  
  const handleAddItem = async (
    event: React.SubmitEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await addItemMutation.mutateAsync({
        title: formData.get("entry") as string,
        quantity: Number(formData.get("quantity")),
        price: Number(formData.get("amount")),
        portfolioId,
      });

      form.reset();
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  function GrandTotal({ data }: { data: Item[] }) {
    const allottedFund = portfolio?.allotted_fund ?? 0;

    const total = data
      .reduce((sum, row) => sum + row.quantity * row.price, 0)

    const totalSpent = data
      .filter((row) => row.spent)
      .reduce((sum, row) => sum + row.quantity * row.price, 0)

    const remainingBalance = allottedFund - totalSpent;

    return (
      <div className="mt-4 flex justify-end">
        <div className="w-72 border-t pt-3 space-y-2">
          <div className="flex justify-between">
            <span className="font">Total</span>
            <span className="font">{total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="font">Spent</span>
            <span>{(totalSpent).toFixed(2)}</span>
          </div>

          <div className={`flex justify-between text-base font-bold ${remainingBalance < 0 ? "text-destructive" : ""}`}>
            <span className="font-medium">Remaining Balance</span>
            <span>{(allottedFund - totalSpent).toFixed(2)}</span>
          </div>
        </div>
      </div>
          )
    }

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: any, value: any) => {
        queryClient.setQueryData<Item[]>(
          ["portfolio-items", portfolioId],
          (old = []) =>
            old.map((row, index) =>
              index === rowIndex
                ? { ...row, [columnId]: value }
                : row
            )
        );
      },
      deleteRow: async (itemId: number) => {
        await deleteItemMutation.mutateAsync({
          itemId: itemId,
          portfolioId,
        });
      },
    },
  })

  useEffect(() => {
    table.setPageSize(10)
  }, [table])

  const pageIndex = table.getState().pagination.pageIndex
  const totalPages = table.getPageCount()

    return (
    <>
    <Card className="p-6 mt-12 border-0">
      <div className="flex justify-end gap-2">
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline"><Plus /> Item</Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-sm">
              <form  onSubmit={handleAddItem}>
              <DialogHeader>
                <DialogTitle>New item</DialogTitle>
                <DialogDescription  aria-describedby={undefined}>
                  
                  {/* Fill out the form below to add a new item to this portfolio. */}
                </DialogDescription>
              </DialogHeader>
              <FieldGroup className="my-4">
                <Field>
                  <Label htmlFor="entry-1">Entry</Label>
                  <Input id="entry-1" name="entry" defaultValue="Item" className="border-0 bg-accent"/>
                </Field>
                <Field>
                  <Label htmlFor="quantity-1">Quantity</Label>
                  <Input id="quantity-1" name="quantity" defaultValue="0" type="number" className="border-0 bg-accent"/>
                </Field>
                <Field>
                  <Label htmlFor="amount-1">Amount</Label>
                  <Input id="amount-1" name="amount" defaultValue="0" type="number" className="border-0 bg-accent"/>
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Add</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                    )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className={row.original.spent ? "opacity-60" : ""}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationContent>
            <PaginationItem>
            <PaginationPrevious
                onClick={() => table.previousPage()}
                className={
                !table.getCanPreviousPage()
                    ? "pointer-events-none opacity-50"
                    : ""
                }
            />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, i) => {
            const pageNumber = i + 1

            return (
                <PaginationItem key={pageNumber}>
                <PaginationLink
                    isActive={pageIndex === i}
                    onClick={() => table.setPageIndex(i)}
                >
                    {pageNumber}
                </PaginationLink>
                </PaginationItem>
            )
            })}

            <PaginationItem>
            <PaginationNext
                onClick={() => table.nextPage()}
                className={
                !table.getCanNextPage()
                    ? "pointer-events-none opacity-50"
                    : ""
                }
            />
            </PaginationItem>
        </PaginationContent>
      </Pagination>


      <GrandTotal data={items} />
    </Card>
    </>
  )
}


