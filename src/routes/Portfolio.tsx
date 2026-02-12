import { FieldGroup, FieldSet, FieldLabel, Field } from '@/components/ui/field';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
//   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { Menu, BookCheck, FileArchive, Repeat, Delete, BookAlert } from 'lucide-react';
import { useParams } from '@tanstack/react-router';
import { EditableDataTable } from '@/components/portfolio/DataTable';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

function Portfolio() {
    const portfolioId = useParams({strict: false}).portfolioId;
    const [open, setOpen] = useState(false)

    return (
        <> 
            <div className="min-h-screen p-6 max-w-6xl mx-auto flex flex-col">
            <Card className='w-full max-w-3xl mx-auto border-0'>
            <CardContent>
            <div className="flex justify-between">
              <div className="flex-1 gap-2">
                <FieldGroup>
                    <FieldSet className="m-2">
                        <Field>
                            <FieldLabel className="font-thin mt-[-1]">
                                Portfolio Name
                            </FieldLabel>
                            <input type="text" value={portfolioId} readOnly className="rounded-md border max-w-xl p-2" />
                            
                        </Field>
                        <Field>
                            <FieldLabel className="font-thin mt-[-1]">
                                Fund
                            </FieldLabel>
                            <input type="text" value={0.00} readOnly className="rounded-md border max-w-xl p-2" />
                            
                        </Field>
                    </FieldSet>
                </FieldGroup>
              </div>

              <div className="flex flex-col gap-2">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BookCheck />
                        Completed
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FileArchive />
                        Archive
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Repeat />
                        Convert currency
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    <DropdownMenuItem 
                        onSelect={(e) => {
                            e.preventDefault() // stop menu auto-close
                            setOpen(true)      // open dialog
                        }}
                        className="text-red-300 focus:text-red-300 hover:text-red-300 data-highlighted:text-red-300">
                        <Delete className="text-red-300 " />
                        Delete Portfolio
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            </CardContent>
            </Card>

            <EditableDataTable />
            </div>

            <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>
                    Delete <span className="italic text-red-300">{portfolioId}</span>?
                </AlertDialogTitle>

                <AlertDialogDescription>
                    <div className="flex justify-center p-6">
                    <BookAlert size={100} className="text-red-300" />
                    </div>
                    This action cannot be undone. 
                    This will permanently delete this whole portfolio.
                </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                <AlertDialogCancel>
                    Cancel
                </AlertDialogCancel>

                <AlertDialogAction
                    className="bg-red-300"
                    onClick={() => {
                    // 🔥 delete logic here
                    setOpen(false)
                    }}
                    // onClick={async () => {
                    // await deletePortfolio(portfolioId)
                    // setOpen(false)
                    // }}
                >
                    Delete
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>

        </>
    );
}

export default Portfolio;