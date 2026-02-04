import { User, Settings } from 'lucide-react'

import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from '../mode-toggle';
import { Link } from '@tanstack/react-router';
import { SidebarTrigger } from '../ui/sidebar';

function TopBar() {
  return (
    <>
    <div className="w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-background gap-4">
      <div className="flex items-center">
        <SidebarTrigger className="-ml-4 cursor-pointer" />
        <ModeToggle />
      </div>
      
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[var(--background)]" align="end">
            <DropdownMenuItem className="cursor-pointer hover:text-[var(--foreground)]">
              <Link to="/profile" className="flex items-center cursor-pointer">
                <User className="mr-2 h-4 w-4 text-foreground" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-[var(--foreground)]">
              <Link to="/settings" className="flex items-center cursor-pointer">
                <Settings className="mr-2 h-4 w-4 text-foreground" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    </>
  )
}

export default TopBar;
