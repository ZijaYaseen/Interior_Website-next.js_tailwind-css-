import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Nav from "./nav";
import Logo from "./Logo";
import { AlignJustify } from "lucide-react";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify size={28}
        className="cursor-pointer mr-4"
        />

      </SheetTrigger>

      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo/>
            <Nav containerStyles = 'flex flex-col items-center gap-y-6'
            linkStyles = 'text-1xl font-semibold'
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation