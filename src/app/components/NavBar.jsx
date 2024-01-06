"use client"
import logo from "../logo.png";
import Image from "next/image";
import Link from "next/link"; 
import Hamburger from "./Hamburger";

const NavBar = () => { 
    return (
      <>
        <div className="w-full h-20 bg-black-600 top-0 mt-4">
          <div className="hidden md:flex justify-center mt-[3.5rem] h-full">
            <ul className="flex space-x-6 font-semibold text-4xl">
              <li className="mt-4">
                <Link href="/">
                  {" "}
                  <div className="transition ease-in-out hover:shadow-2xl">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={75}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                </Link>
              </li>
              <li className="mt-7 hover:text-white/50 transition ease-in-out duration-100 ">
                <Link href="/">Home</Link>
              </li>
              <li className="mt-7 hover:text-white/50 transition ease-in-out duration-100">
                <Link href="/about">About</Link>
              </li>
              <li className="mt-7 hover:text-white/50 transition ease-in-out duration-100">
                <Link href="/officer-team">Officers</Link>
              </li>
              <li className="mt-7 hover:text-white/50 transition ease-in-out duration-100 ">
                <Link href="/client-teams">Clients</Link>
              </li>
              <li className="mt-7 hover:text-white/50 transition ease-in-out duration-100 ">
                <Link href="/social-media">Social Media</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-end bg-white-800 p-4">
            <Hamburger />
          </div>
        </div>
      </>
    );
}; 

export default NavBar; 