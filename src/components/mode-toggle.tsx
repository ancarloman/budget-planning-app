import { Cat, Flower2, CloudMoon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
function ModeToggle() {
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="cursor-pointer">
          <Cat className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <CloudMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[var(--background)]">
        <DropdownMenuItem className="cursor-pointer text-xs hover:text-[var(--foreground)]">
          <Cat className="h-4 w-4 text-foreground" />
          <span>DayTime</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-xs hover:text-[var(--foreground)]">
          <CloudMoon className="h-4 w-4 text-foreground" />
          <span>NightSky</span>
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
          System
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { ModeToggle };