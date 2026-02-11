import { FieldGroup, FieldSet, FieldLabel, Field } from '@/components/ui/field';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { MoreHorizontalIcon, BookCheck, FileArchive, Repeat } from 'lucide-react';
import { useParams } from '@tanstack/react-router';
import { EditableDataTable } from '@/components/portfolio/DataTable';
import { Card, CardContent } from '@/components/ui/card';

function Portfolio() {
    const portfolioId = useParams({strict: false}).portfolioId;

    return (
        <> 
            <div className="min-h-screen p-6 max-w-6xl mx-auto flex flex-col">
            <Card className='w-full max-w-4xl mx-auto border-0'>
            <CardContent>
            <div className="flex justify-between">
              <div className="flex-1 gap-2">
                <FieldGroup>
                    <FieldSet>
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
                        <MoreHorizontalIcon />
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
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Repeat />
                        Convert currency
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
        </>
    );
}

export default Portfolio;