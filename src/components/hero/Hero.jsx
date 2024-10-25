import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="background container mx-auto px-8 text-white flex justify-start items-center">
      <div className="">
        <h1 className=" md:text-5xl text-4xl lg:text-6xl font-bold capitalize">
          find a place <br /> where you can <br /> be yourself
        </h1>
        <p className=" pb-8 text-xs md:text-sm lg:text-base text-gray-300 py-4 w-[90%] md:w-[60%] lg:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          delectus vel labore, ex illo eaque ipsam natus porro numquam minus?
        </p>
        <div className="bg-white text-gray-700 w-full md:w-[80%] lg:w-2/3 rounded-2xl flex justify-center items-center text-xs md:text-base">
          <div className="flex-1 pl-3 py-4">
            <h4>Want to</h4>
            <Select>
              <SelectTrigger className="md:w-[90%] w-full">
                <SelectValue placeholder="Buy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="sell">Sell</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 pl-3 py-4">
            <h4>Property</h4>
            <Select>
              <SelectTrigger className="md:w-[90%] w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="flat">Flat</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 pl-3 py-4">
            <h4>Location</h4>
            <Input type="text" placeholder="Enter City" />
          </div>
          <div className="flex-1">
            <div className="flex bg-blue-500 justify-center items-center mx-2 h-16 md:h-20 rounded-2xl" >
            <Search className=" text-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
