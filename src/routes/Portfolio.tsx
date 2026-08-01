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
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Menu, BookCheck, FileArchive, Repeat, Delete, BookAlert } from 'lucide-react';
import { EditableDataTable } from '@/components/portfolio/PortfolioTable';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { PortfolioRoute } from '@/router';
import { usePortfolio, useUpdatePortfolioAllottedBudget, useUpdatePortfolioTitle } from '@/hooks/usePortfolio';


function Portfolio() {
    const { portfolioId } = PortfolioRoute.useParams();
    const { data: portfolio } = usePortfolio(portfolioId); // can add isLoading here
    // const { data: portfolio } = usePortfolio(portfolioId);
    const updateTitle = useUpdatePortfolioTitle(portfolioId);
    const updateAllottedFund = useUpdatePortfolioAllottedBudget(portfolioId);
    const [title, setTitle] = useState("");
    const [open, setOpen] = useState(false)
    const [allottedFund, setAllottedFund] = useState(0);

    // const [portfolio, setPortfolio] = useState<Portfolio>();
    //       console.log("Portfolio in dashboard:", portfolio);
        
    //       useEffect(() => {
    //         getPortfolioData(portfolioId)
    //           .then(setPortfolio)
    //           .catch(console.error);
    //       }, [portfolioId]);

    useEffect(() => {
        if (portfolio) {
            setTitle(portfolio?.title || "");
            setAllottedFund(portfolio?.allotted_fund || 0);
        }
    }, [portfolio]);

    const saveNewTitle = () => {
        updateTitle.mutate(title);
    };

    const saveNewAllottedFund = () => {
        updateAllottedFund.mutate(allottedFund);
    };

    return (
        <> 
            <div className="min-h-screen  max-w-6xl mx-auto flex flex-col">
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
                            <Input
                                className="rounded-md border max-w-xl p-2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                    e.preventDefault();
                                    saveNewTitle();
                                    e.currentTarget.blur()
                                    }
                                }}
                                onBlur={saveNewTitle}
                            />
                            
                        </Field>
                        <Field>
                            <FieldLabel className="font-thin mt-[-1]">
                                Allotted Fund
                            </FieldLabel>
                            {/* <input type="number" value={portfolio?.allotted_fund ?? ""} readOnly className="rounded-md border max-w-xl p-2" /> */}
                            <Input
                                className="rounded-md border max-w-xl p-2"
                                value={allottedFund}
                                onChange={(e) => setAllottedFund(Number(e.target.value))}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                    e.preventDefault();
                                    saveNewAllottedFund();
                                    e.currentTarget.blur()
                                    }
                                }}
                                onBlur={saveNewAllottedFund}
                            />
                            
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

            <EditableDataTable portfolioId={portfolioId} />
            </div>

            <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>
                    Delete <span className="italic text-red-300">{portfolio?.title ?? ""}</span>?
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