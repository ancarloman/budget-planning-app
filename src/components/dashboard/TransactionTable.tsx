import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "../ui/card";

function TransactionTable() {
    return (
        <>
        <Card className="flex-1 flex flex-col border-0 min-h-0">
        <CardContent className="pt-4 flex-1 flex flex-col min-h-0 overflow-hidden">

        <div className="flex-1 min-h-0 overflow-y-auto">
        <Table>
        <TableCaption>A list of your transactions.</TableCaption>
        <TableHeader className="sticky top-0 bg-background z-10">
            <TableRow>
            <TableHead className="w-[200px]">DATE</TableHead>
            <TableHead>DETAILS</TableHead>
            <TableHead className="text-right">AMOUNT</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">Project 1  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 11, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Added Fund
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">+$2,000.00</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                    Snacks
                </span>

                <p className="text-muted-foreground text-xs break-words">
                    Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja.
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">Project 1  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 11, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Added Fund
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">+$2,000.00</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                    Snacks
                </span>

                <p className="text-muted-foreground text-xs break-words">
                    Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja.
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">Project 1  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 11, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Added Fund
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">+$2,000.00</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                    Snacks
                </span>

                <p className="text-muted-foreground text-xs break-words">
                    Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja.
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">Project 1  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 11, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Added Fund
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">+$2,000.00</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                    Snacks
                </span>

                <p className="text-muted-foreground text-xs break-words">
                    Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja.
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">Project 1  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 11, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Added Fund
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">+$2,000.00</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                Snacks
                </span>
                <p className="text-muted-foreground text-xs break-words">  
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

            <TableRow>
            <TableCell className="font-medium">Feb 15, 2026</TableCell>
            <TableCell>
                <span className="font-medium leading-tight">
                    Snacks
                </span>

                <p className="text-muted-foreground text-xs break-words">
                    Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja. sdsdhs shjvdsvdhsa
                    hsvdsadgsav.sd cshhvd Project 1bsdshdhsavdgsavdgsvdvhs bcsdhsasja.
                </p>
            </TableCell>
            <TableCell className="font-medium text-right">-$305.50</TableCell>
            </TableRow>

        </TableBody>
        </Table>
        </div>
        </CardContent>
        </Card>

        </>
    );

}

export default TransactionTable;