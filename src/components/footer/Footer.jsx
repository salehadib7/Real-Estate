import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#061630] mt-5">
      <div className="container mx-auto px-8 grid md:grid-cols-3 lg:grid-cols-5 gap-3 py-14">
        <div className="md:col-span-3 lg:col-span-2">
          <Image className=" w-[120px] md:w-[150px] lg:w-[170px]" src="/logo.png" height={170} width={170} alt="logo" />
          <p className="py-5 text-xs md:text-sm lg:text-base text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quam
            molestiae consequatur odio quo, ipsa maiores. Debitis sapient.
          </p>
        </div>
        <div>
          <h3 className="text-base pb-3 text-white md:text-base lg:text-lg font-bold capitalize lg:leading-tight">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2">
            <Link className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200" href="#home">
              Home
            </Link>
            <Link className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200" href="#buy">
              Buy
            </Link>
            <Link className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200" href="#sell">
              Sell
            </Link>
            <Link className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200" href="#rent">
              Rent
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-base pb-3 text-white md:text-base lg:text-lg font-bold capitalize lg:leading-tight">
            Support
          </h3>
          <div className="flex flex-col gap-2">
            <Link className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200" href="#home">
              About us
            </Link>
            <Link className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200" href="#buy">
              Contact us
            </Link>
            <Link className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200" href="#sell">
              Privacy policy
            </Link>
            <Link className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200" href="#rent">
              Terms and conditions
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-base pb-3 text-white md:text-base lg:text-lg font-bold capitalize lg:leading-tight">
            Get in touch
          </h3>
          <div className="flex flex-col gap-2">
            <p className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200">
              About us
            </p>
            <p className="text-gray-300 text-xs md:text-sm lg:text-base hover:text-gray-200">
              12-Ansar math, Nabinbaag, Gopalganj, Bangladesh
            </p>
            <div className=" flex gap-3">
                <Image
                 src="/facebook.svg"
                 height={20}
                 width={20}
                 alt="facebook"
                />
                <Image
                 src="/insta.svg"
                 height={20}
                 width={20}
                 alt="instagram"
                />
                <Image
                 src="/twitter.svg"
                 height={20}
                 width={20}
                 alt="twitter"
                />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: "0.5px solid gray "}}/>
      <div className="w-full text-center">
      <p className="text-gray-400 text-xs md:text-sm lg:text-base py-4">
              &copy; All Rights Reserved - <a className="font-bold text-gray-300" target="_blank" href="https://www.facebook.com/God.D.Adib">Saleh D. Adib</a>
            </p>
      </div>
    </div>
  );
};

export default Footer;
