"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import logo from "../logo.png";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 absolute top-[4rem] right-[2rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <ul
          className={
            isOpen
              ? "z-10 absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
              : "hidden"
          }
        >
          <li className="mt-3">
            <Link href="/">
              {" "}
              <Image
                src={logo}
                alt="Logo"
                width={75}
                height={50}
                priority
                className="rounded-full"
              />
            </Link>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <a href="/">Home</a>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <a href="/about">About</a>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <a href="/officer-team">Officer Team</a>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <a href="/client-teams">Client Teams</a>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <a href="/social-media">Social Media</a>
          </li>
        </ul>
      </button>
    </div>
  );
};

export default Hamburger;
