import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import HouseCard from "./houseCard/HouseCard";
import { houseList } from "./houseList";

const Houses = () => {
  return (
    <div className=" px-8 container mx-auto py-10">
      <div className="flex flex-col justify-start gap-2 md:flex-row md:justify-between md:items-center text-gray-700">
        <div>
          <h3 className=" text-black capitalize font-bold text-2xl md:text-3xl">
            Best home in your city
          </h3>
          <p className=" w-full md:w-[70] lg:w-[60%] text-xs py-2 md:text-sm lg:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nemo laudantium aliquam commodi ex qui.
          </p>
        </div>
        <div>
          <Button variant="noneOutline2">
            Explore Now <ArrowUpRight />
          </Button>
        </div>
      </div>
      <div className=" flex justify-center md:justify-between items-center py-5 flex-wrap">
        {houseList.map((house) => {
          return (
            <HouseCard
              key={house.id}
              image={house.image}
              price={house.price}
              title={house.title}
              description={house.description}
              bed={house.bed}
              bath={house.bath}
              sqft={house.sqft}
              isNew={house.isNew}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Houses;
