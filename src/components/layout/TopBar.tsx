import { Cat, Flower2, CloudMoon } from 'lucide-react'

import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

function TopBar() {
  return (
    <>
    <div className="w-full z-50 flex items-center justify-end px-4 md:px-8 py-4 border-b bg-background gap-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon-sm">
          <Flower2/> {/* Theme toggle */}
        </Button>

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
