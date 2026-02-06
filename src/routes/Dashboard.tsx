import { Repeat, HandCoins, BanknoteArrowUp, BanknoteX } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import TransactionTable from "@/components/dashboard/TransactionTable"


function Dashboard() {
  const currency = [
    "United States Dollar",
    "Euro",
    "British Pound",
    "Japanese Yen",
    "Canadian Dollar",
    "Australian Dollar",
  ];

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto flex flex-col">
        <Card className="w-full max-w-2xl mx-auto">
          <CardContent>
            <div className="flex justify-between">
              <div className="flex gap-16">
                <h1 className="text-2xl font-semibold">0.00</h1>
                
                <div>
                  <Repeat className="mx-2 mt-1" />
                </div>

                <div className="flex flex-col gap-2">
                  <Input placeholder="" disabled/>

                  <Combobox items={currency}>
                    <ComboboxInput placeholder="Select a currency" />
                    <ComboboxContent>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Dialog>
                   <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon-lg">
                            <HandCoins className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                      </TooltipTrigger>

                      <TooltipContent side="right">
                        Apply conversion
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Choose conversion action</DialogTitle>
                      <DialogDescription className="pt-6 pb-4">
                        <RadioGroup defaultValue="plus" className="max-w-sm">
                          <FieldLabel htmlFor="apply-to-fund">
                            <Field className="bg-secondary" orientation="horizontal">
                              <FieldContent className="bg-secondary">
                                <FieldTitle>Apply To Fund</FieldTitle>
                                <FieldDescription>
                                  The selected currency will be applied to your fund only.
                                </FieldDescription>
                              </FieldContent>
                              <RadioGroupItem value="plus" id="apply-to-fund" />
                            </Field>
                          </FieldLabel>
                          <FieldLabel htmlFor="apply-to-all-projects">
                            <Field className="bg-secondary" orientation="horizontal">
                              <FieldContent>
                                <FieldTitle>Apply To All Project Funds</FieldTitle>
                                <FieldDescription>All your project funds will be updated with the selected currency.</FieldDescription>
                              </FieldContent>
                              <RadioGroupItem value="pro" id="apply-to-all-projects" />
                            </Field>
                          </FieldLabel>
                        </RadioGroup>
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button type="submit">Apply Selected</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon-lg">
                            <BanknoteArrowUp className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                      </TooltipTrigger>

                      <TooltipContent side="right">
                        Add Fund
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Fund</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon-lg">
                            <BanknoteX className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                      </TooltipTrigger>

                      <TooltipContent side="right">
                        Manual Deduct
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Manual Deduct</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>
                        
        <TransactionTable />
      
    </div>

  )
}

export default Dashboard
