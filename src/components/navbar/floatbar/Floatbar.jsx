import { Command, CommandItem, CommandList } from "@/components/ui/command";
import Link from "next/link";

const Floatbar = ({ open }) => {
  return (
    open && (
      <div className=" absolute right-0 top-16">
        <Command className=" min-w-[350px] h-auto">
          <CommandList className=" bg-slate-100">
            <CommandItem className=" text-base p-2 flex justify-center items-center">
              <Link className="hover:text-blue-500" href="#home">
                Home
              </Link>
            </CommandItem>
            <CommandItem className=" text-base p-2 flex justify-center items-center">
              <Link className="hover:text-blue-500" href="#rent">
                Rent
              </Link>
            </CommandItem>
            <CommandItem className=" text-base p-2 flex justify-center items-center">
              <Link className="hover:text-blue-500" href="#sell">
                Sell
              </Link>
            </CommandItem>
            <CommandItem className=" text-base p-2 flex justify-center items-center">
              <Link className="hover:text-blue-500" href="#buy">
                Buy
              </Link>
            </CommandItem>
            <CommandItem className=" text-base p-2 flex justify-center items-center">
              <Link className="hover:text-blue-500" href="#about">
                About
              </Link>
            </CommandItem>
            <hr />
            <CommandItem className=" text-base p-2 py-4 flex justify-center items-center">
              <Link
                href="#login"
                className="px-20 py-3 rounded-full text-white bg-blue-500"
              >
                Login
              </Link>
            </CommandItem>
          </CommandList>
        </Command>
      </div>
    )
  );
};

export default Floatbar;
