import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import TestimonialCard from "./testimonialCard/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="container px-8 mx-auto">
      <div className="flex flex-col justify-start gap-2 md:flex-row md:justify-between md:items-center text-gray-700">
        <div className="flex flex-col gap-4">
          <h3 className=" capitalize font-bold text-blue-500">our customers</h3>
          <h3 className="text-black capitalize font-bold text-2xl md:text-4xl w-full md:w-[80%] lg:w-[60%] lg:leading-snug tracking-wider">
            we help 1000+ families to find their true home
          </h3>
          <div className="flex justify-start items-center relative w-fit">
            <Image className=" mx-[-2px] border-white border-[1px] rounded-l-2xl rounded-r-2xl" src="/avatar-1.jpg" height={50} width={50} alt="avatar"/>
            <Image className=" mx-[-2px] border-white border-[1px] rounded-l-2xl rounded-r-2xl" src="/avatar-2.jpg" height={50} width={50} alt="avatar"/>
            <Image className=" mx-[-2px] border-white border-[1px] rounded-l-2xl rounded-r-2xl" src="/avatar-3.jpg" height={50} width={50} alt="avatar"/>
            <Image className=" mx-[-2px] border-white border-[1px] rounded-l-2xl rounded-r-2xl" src="/avatar-4.jpg" height={50} width={50} alt="avatar"/>
            <div className=" w-[50px] h-[34.32px] border-[1px] rounded-l-2xl rounded-r-2xl absolute right-[-2px] top-0 bg-black flex justify-center items-center text-xs text-white bg-opacity-50">99+</div>
          </div>
        </div>
        <div>
          <Button variant="noneOutline2">
            View All Stories <ArrowUpRight />
          </Button>
        </div>
      </div>
      <TestimonialCard/>
    </div>
  );
};

export default Testimonial;
