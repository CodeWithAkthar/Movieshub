import sortIcon from "../assets/sortIcon.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export function DropdownMenuDemo() {
  function selected(selectedOption: number) {
    // ....................
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          src={sortIcon}
          alt="sortIcon"
          className="w-8 h-8 hover:bg-slate-700"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 text-white bg-gray-800 border-none">
        <DropdownMenuGroup>
          <DropdownMenuItem>{/* <YearPicker/> */}</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="focus:text-black">
              Genres
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="text-white bg-gray-800 border-none">
                <DropdownMenuItem onClick={() => selected(28)}>
                  Action
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => selected(16)}>
                  Animation
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => selected(10751)}>
                  Family
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => selected(80)}>
                  Crime
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => selected(14)}>
                  Fantasy
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => selected(27)}>
                  Horror
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
