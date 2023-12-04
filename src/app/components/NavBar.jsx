"use client"
import logo from "../logo.png";
import Image from "next/image";
import Link from "next/link"; 
import Hamburger from "./Hamburger";

const NavBar = () => { 

    return (
      <div className="w-full h-20 bg-black-600 top-0">
        <div className="mx-auto px-4 h-full">
          <div className="hidden md:flex mt-8 justify-center items-center h-full">
            <ul className="flex flex-direction: column space-x-4 text-white text-5xl gap-x-8">
              <li className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0 ">
                <Link href="/">home</Link>
              </li>
              <li className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0 ">
                <Link href="/about">about</Link>
              </li>
              <li className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0 ">
                <Link href="/experience">experience</Link>
              </li>
              <li className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0 ">
                <Link href="/projects">projects</Link>
              </li>
              <li className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-purple-700 before:absolute before:left-0 before:bottom-0 ">
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-end bg-white-800 p-4">
            <Hamburger />
          </div>
        </div>
      </div>
    );
}; 
    //   <div className="sticky">
    //     <div className=" top-0 left-0">
    //         <a href="/"> 
    //             <Image
    //                 src={logo}
    //                 alt="Logo"
    //                 width={75}
    //                 height={50}
    //                 priority
    //                 className="m-2 rounded-full"
    //             />
    //         </a>
    //     </div>
    //   </div>

export default NavBar; 