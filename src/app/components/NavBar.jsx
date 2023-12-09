"use client"
import logo from "../logo.png";
import Image from "next/image";
import Link from "next/link"; 
import Hamburger from "./Hamburger";

const NavBar = () => { 
    return (
      <>
        <div className="flex flex-col w-full h-20 bg-black-600 top-0 mt-4">
          <div className="mx-auto px-4 h-full">
            <div className="hidden md:flex mt-8 justify-center items-center h-full">
              <ul className="flex flex-column space-x-4 text-white text-4xl gap-x-8">
                <li className="mt-3">
                  <Link href="/">
                    {" "}
                    <Image
                      src={logo}
                      alt="Logo"
                      width={75}
                      height={50}
                      className="rounded-full"
                    />
                  </Link>
                </li>
                <li className="mt-7 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0">
                  <Link href="/">Home</Link>
                </li>
                <li className="mt-7 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0 ">
                  <Link href="/about">About</Link>
                </li>
                <li className="mt-7 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0 ">
                  <Link href="/officer-team">Officer Team</Link>
                </li>
                <li className="mt-7 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0 ">
                  <Link href="/client-teams">Client Teams</Link>
                </li>
                <li className="mt-7 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0 ">
                  <Link href="/social-media">Social Media</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-end bg-white-800 p-4">
              <Hamburger />
            </div>
          </div>
        </div>
      </>
    );
}; 

export default NavBar; 