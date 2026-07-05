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
// import type { NavItem } from "../layout/SideBar"

interface EditableDataTableProps {
  portfolioId: string;
}

interface Item {
  item_id: number
  title: string
  quantity: number
  price: number
  spent: number | 0 | 1
  transaction_id: number
  portfolio_id: number
  created_at: string
}


async function getItems(portfolioId: string) {
  const res = await fetch("http://localhost:3001/api/portfolio/items/" + portfolioId);

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
}

export const columns: ColumnDef<Item>[] = [
  {
    id: "checked",
    header: "",
    cell: ({ row, table }) => (
      <Checkbox
        checked={row.original.spent === 1}
        onCheckedChange={(v) =>
          table.options.meta?.updateData(row.index, "checked", !!v)
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
    cell: ({row}) => {
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
              <AlertDialogAction className="bg-red-300">Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    },
  },
]

function GrandTotal({ data }: { data: Item[] }) {
  const total = data
    .filter((row) => !row.spent)
    .reduce((sum, row) => sum + row.quantity * row.price, 0)

  return (
    <div className="flex justify-end mt-4 text-lg font-semibold">
      Total: {total.toFixed(2)}
    </div>
  )
}

export function EditableDataTable({ portfolioId, }: EditableDataTableProps) {
  const [items, setItems] = useState<Item[]>([]);
      console.log("Items in portfolio:", items);
          
      useEffect(() => {
          getItems(portfolioId)
            .then(setItems)
            .catch(console.error);
      }, [portfolioId]);

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: any, value: any) => {
        setItems((old) =>
          old.map((row, index) =>
            index === rowIndex
              ? { ...row, [columnId]: value }
              : row
          )
        )
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
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline"><Plus /> Item</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>New item</DialogTitle>
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
            </DialogContent>
          </form>
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
