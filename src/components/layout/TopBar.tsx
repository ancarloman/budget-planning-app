import { Cat, Flower2, CloudMoon } from 'lucide-react'

import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { ModeToggle } from '../mode-toggle';

function TopBar() {
  return (
    <>
    <div className="w-full z-50 flex items-center justify-end px-4 md:px-8 py-4 bg-background gap-4">
      <div className="flex items-center gap-4">
        <ModeToggle />
        
        {/* <Button variant="outline" size="icon-sm">
          <Flower2/>  Theme toggle 
        </Button> */}

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
    </>
  )
}

export default TopBar;
