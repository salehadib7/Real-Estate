"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Floatbar from "./floatbar/Floatbar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id={isSticky ? "navScroll" : ""}
      className=" transition-all z-50 fixed pt-2 w-full top-0 left-0"
    >
      <div className=" px-8 text-xs lg:text-base container mx-auto text-white flex justify-between items-center py-2">
        <div>
          <Image src="/logo.png" height={150} width={150} alt="logo" />
        </div>
        <div className=" hidden md:flex justify-center gap-8 items-center">
          <Link className="hover:text-gray-200" href="#home">
            Home
          </Link>
          <Link className="hover:text-gray-200" href="#rent">
            Rent
          </Link>
          <Link className="hover:text-gray-200" href="#sell">
            Sell
          </Link>
          <Link className="hover:text-gray-200" href="#buy">
            Buy
          </Link>
          <Link className="hover:text-gray-200" href="#about">
            About
          </Link>
        </div>
        <div className=" hidden md:flex items-center justify-end gap-3">
          <Link
            href="#login"
            className={buttonVariants({ variant: "noneOutline" })}
          >
            Login
          </Link>
          <Link
            href="#login"
            className={buttonVariants({ variant: "primary" })}
          >
            Get Started
          </Link>
        </div>
        <div className=" relative block md:hidden">
          <Floatbar open={open} />
          <svg
            className="hb"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            stroke="#eee"
            strokeWidth=".6"
            fill="rgba(0,0,0,0)"
            strokeLinecap="round"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setopen(!open);
            }}
          >
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
              <animate
                dur="0.2s"
                attributeName="d"
                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                fill="freeze"
                begin="start.begin"
              />
              <animate
                dur="0.2s"
                attributeName="d"
                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                fill="freeze"
                begin="reverse.begin"
              />
            </path>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="2s"
                id="reverse"
                attributeName="width"
                begin="click"
              />
            </rect>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="0.001s"
                id="start"
                attributeName="width"
                values="10;0"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.001s"
                attributeName="width"
                values="0;10"
                fill="freeze"
                begin="reverse.begin"
              />
            </rect>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
