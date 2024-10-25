import { Bath, Bed, LandPlot } from "lucide-react";
import Image from "next/image";

const HouseCard = ({
  image,
  price,
  title,
  description,
  bed,
  bath,
  sqft,
  isNew,
}) => {
  return (
    <div className="px-1 py-5">
      <div className=" relative max-w-[280px] text-gray-700 shadow-xl rounded-lg">
        {isNew && (
          <div className=" absolute left-2 top-2 px-3 py-1 bg-green-500 text-white rounded-full w-auto">
            New
          </div>
        )}
        <Image
          src={image}
          width={280}
          height={280}
          alt="property-1"
          className=" rounded-t-lg"
        />
        <div className=" px-2">
          <h3 className="pt-4 pb-2 font-semibold">{price}</h3>
          <h4 className=" pb-1 text-xl font-bold">{title}</h4>
          <p className=" pb-2 text-sm w-fit">
            {description}
          </p>
          <hr />
          <div className="py-4 flex justify-between items-center">
            <div className=" flex justify-center items-center gap-2">
              <Bed size={20} />
              <h3 className=" text-sm">{bed} Bed</h3>
            </div>
            <div className=" flex justify-center items-center gap-2 border-r-[1]">
              <Bath size={20} />
              <h3 className=" text-sm">{bath} Bath</h3>
            </div>
            <div className=" flex justify-center items-center gap-2 border-r-[1]">
              <LandPlot size={20} />
              <h3 className=" text-sm">{sqft} SQFT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
