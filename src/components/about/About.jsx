import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className=" container px-8 mx-auto text-gray-700">
      <div className=" flex md:flex-row flex-col justify-between items-center pb-10 md:pb-16 lg:pb-20 gap-4">
        <div className=" flex-auto md:flex-1  flex justify-start items-center">
          <Image
            src="/feature-banner-1.jpg"
            height={550}
            width={550}
            alt="feature banner"
            className=" rounded-2xl"
          />
        </div>
        <div className="flex-auto md:flex-1 ">
          <h1 className=" w-[90%] md:text-2xl lg:text-5xl font-bold capitalize text-black lg:leading-tight">
            We specialize in quality home renovations
          </h1>
          <p className=" py-3 text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            voluptatibus facilis! Nulla aut animi corrupti nemo eum vel, nostrum
            ipsa possimus sapiente asperiores officiis cum modi distinctio
            consequuntur mollitia qui?
          </p>
          <div className="flex justify-between items-center pt-3 text-xs md:text-sm">
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className=" flex justify-start items-center gap-2">
                <CircleCheckBig className=" text-blue-500" /> smart home
              </div>
              <div className=" flex justify-start items-center gap-2">
                <CircleCheckBig className=" text-blue-500" /> Exceptional
                lifestyle
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className=" flex justify-start items-center gap-2">
                <CircleCheckBig className=" text-blue-500" /> Beautiful Location
              </div>
              <div className=" flex justify-start items-center gap-2">
                <CircleCheckBig className=" text-blue-500" /> 24/7 security
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex md:flex-row-reverse flex-col justify-between items-center pb-10 md:pb-16 lg:pb-20 gap-4">
        <div className=" flex-auto md:flex-1  flex justify-end items-center">
          <Image
            src="/feature-banner-2.jpg"
            height={550}
            width={550}
            alt="feature banner"
            className=" rounded-2xl"
          />
        </div>
        <div className="flex-auto md:flex-1 ">
          <h1 className=" w-[90%] md:text-2xl lg:text-5xl font-bold capitalize text-black lg:leading-tight">
            We specialize in quality home renovations
          </h1>
          <p className=" py-3 text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            voluptatibus facilis! Nulla aut animi corrupti nemo eum vel, nostrum
            ipsa possimus sapiente asperiores officiis cum modi distinctio
            consequuntur mollitia qui?
          </p>
          <div className="flex justify-between items-center pt-3 text-xs md:text-sm">
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className=" flex justify-start items-center gap-2">
                <CircleCheckBig className=" text-blue-500" /> smart home
              </div>
              <div className=" flex justify-start items-center gap-2">
                <CircleCheckBig className=" text-blue-500" /> Exceptional
                lifestyle
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className=" flex justify-start items-center gap-2">
                <CircleCheckBig className=" text-blue-500" /> Beautiful Location
              </div>
              <div className=" flex justify-start items-center gap-2">
                <CircleCheckBig className=" text-blue-500" /> 24/7 security
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
